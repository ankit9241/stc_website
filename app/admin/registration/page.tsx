"use client"

import { useState, useEffect } from 'react'
import AdminNav from '@/components/adminNav'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Users, Edit, Trash2, Loader2, Download, Calendar, FileText, ChevronRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { uploadToImageKit, deleteFromImageKit } from '@/lib/imagekit'
import Image from 'next/image'

interface RegistrationForm {
  _id: string
  title: string
  content: string
  image?: string
  imageFileId?: string
  eventAt: string
  uploadedBy: string
  createdAt: string
}

interface Response {
  _id: string
  forEvent: {
    _id: string
    title: string
  }
  name: string
  collegeMail: string
  phone: string
  course: string
  semester: number
  createdAt: string
}

export default function AdminRegistrationPage() {
  const [registrations, setRegistrations] = useState<RegistrationForm[]>([])
  const [responses, setResponses] = useState<Response[]>([])
  const [selectedForm, setSelectedForm] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingForm, setEditingForm] = useState<RegistrationForm | null>(null)
  const [responsesLoading, setResponsesLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    imageFileId: '',
    eventAt: '',
    uploadedBy: '',
  })

  useEffect(() => {
    fetchRegistrations()
    fetchAllResponses()
  }, [])

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('/api/admin/registration')
      if (response.ok) {
        const data = await response.json()
        setRegistrations(data)
      }
    } catch (error) {
      console.error('Error fetching registrations:', error)
      toast({
        title: "Error",
        description: "Failed to fetch registration forms",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const fetchAllResponses = async () => {
    try {
      const response = await fetch('/api/admin/registration/responses')
      if (response.ok) {
        const data = await response.json()
        setResponses(data)
      }
    } catch (error) {
      console.error('Error fetching responses:', error)
    }
  }

  const fetchResponsesForForm = async (formId: string) => {
    setResponsesLoading(true)
    setSelectedForm(formId)
    try {
      const response = await fetch(`/api/admin/registration/responses?forEvent=${formId}`)
      if (response.ok) {
        const data = await response.json()
        setResponses(data)
      }
    } catch (error) {
      console.error('Error fetching responses:', error)
      toast({
        title: "Error",
        description: "Failed to fetch responses",
        variant: "destructive"
      })
    } finally {
      setResponsesLoading(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    try {
      let image = formData.image
      let imageFileId = formData.imageFileId

      // Upload new image if selected
      if (imageFile) {
        const fileName = `registration_${Date.now()}_${imageFile.name}`
        const uploadResult = await uploadToImageKit(imageFile, fileName)
        image = uploadResult.url
        imageFileId = uploadResult.fileId

        // Delete old image if updating
        if (editingForm && editingForm.imageFileId) {
          try {
            await deleteFromImageKit(editingForm.imageFileId)
          } catch (error) {
            console.error('Error deleting old image:', error)
          }
        }
      }

      const registrationData = {
        ...formData,
        image,
        imageFileId,
        eventAt: new Date(formData.eventAt).toISOString(),
      }

      const response = editingForm
        ? await fetch('/api/admin/registration', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: editingForm._id, ...registrationData }),
          })
        : await fetch('/api/admin/registration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registrationData),
          })

      if (response.ok) {
        toast({
          title: "Success",
          description: `Registration form ${editingForm ? 'updated' : 'created'} successfully`,
        })
        setDialogOpen(false)
        resetForm()
        fetchRegistrations()
      } else {
        throw new Error('Failed to save registration')
      }
    } catch (error) {
      console.error('Error saving registration:', error)
      toast({
        title: "Error",
        description: `Failed to ${editingForm ? 'update' : 'create'} registration form`,
        variant: "destructive"
      })
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (form: RegistrationForm) => {
    if (!confirm('Are you sure you want to delete this registration form? All responses will also be affected.')) return

    try {
      // Delete image from ImageKit if exists
      if (form.imageFileId) {
        try {
          await deleteFromImageKit(form.imageFileId)
        } catch (error) {
          console.error('Error deleting image:', error)
        }
      }

      const response = await fetch(`/api/admin/registration?id=${form._id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Registration form deleted successfully",
        })
        fetchRegistrations()
      } else {
        throw new Error('Failed to delete registration')
      }
    } catch (error) {
      console.error('Error deleting registration:', error)
      toast({
        title: "Error",
        description: "Failed to delete registration form",
        variant: "destructive"
      })
    }
  }

  const handleDeleteResponse = async (responseId: string) => {
    if (!confirm('Are you sure you want to delete this response?')) return

    try {
      const response = await fetch(`/api/admin/registration/responses?id=${responseId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Response deleted successfully",
        })
        if (selectedForm) {
          fetchResponsesForForm(selectedForm)
        } else {
          fetchAllResponses()
        }
      } else {
        throw new Error('Failed to delete response')
      }
    } catch (error) {
      console.error('Error deleting response:', error)
      toast({
        title: "Error",
        description: "Failed to delete response",
        variant: "destructive"
      })
    }
  }

  const handleEdit = (form: RegistrationForm) => {
    setEditingForm(form)
    setFormData({
      title: form.title,
      content: form.content,
      image: form.image || '',
      imageFileId: form.imageFileId || '',
      eventAt: form.eventAt.split('T')[0],
      uploadedBy: form.uploadedBy,
    })
    setImagePreview(form.image || '')
    setDialogOpen(true)
  }

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      image: '',
      imageFileId: '',
      eventAt: '',
      uploadedBy: '',
    })
    setEditingForm(null)
    setImageFile(null)
    setImagePreview('')
  }

  const exportToCSV = () => {
    if (responses.length === 0) {
      toast({
        title: "No data",
        description: "No responses to export",
        variant: "destructive"
      })
      return
    }

    const headers = ['Name', 'Email', 'Phone', 'Course', 'Semester', 'Form Title', 'Submitted At']
    const rows = responses.map(r => [
      r.name,
      r.collegeMail,
      r.phone,
      r.course,
      r.semester,
      r.forEvent?.title || 'N/A',
      new Date(r.createdAt).toLocaleString()
    ])

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `registration-responses-${Date.now()}.csv`
    a.click()
    window.URL.revokeObjectURL(url)

    toast({
      title: "Success",
      description: "Responses exported successfully",
    })
  }

  const getResponseCount = (formId: string) => {
    return responses.filter(r => r.forEvent?._id === formId).length
  }

  const FormCard = ({ form }: { form: RegistrationForm }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      {form.image && (
        <div className="relative h-48 w-full">
          <Image
            src={form.image}
            alt={form.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-[#0f2a4d] mb-2">{form.title}</h3>
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">{form.content}</p>
        <div className="flex items-center text-sm text-[#1a4b8c] mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          Event: {new Date(form.eventAt).toLocaleDateString()}
        </div>
        <div className="text-xs text-gray-500">
          By: {form.uploadedBy} • Created: {new Date(form.createdAt).toLocaleDateString()}
        </div>
        <div className="mt-3 inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
          {getResponseCount(form._id)} Responses
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 flex gap-2">
        <Button
          onClick={() => handleEdit(form)}
          variant="outline"
          size="sm"
          className="flex-1"
        >
          <Edit className="w-4 h-4 mr-2" />
          Edit
        </Button>
        <Button
          onClick={() => handleDelete(form)}
          variant="destructive"
          size="sm"
          className="flex-1"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  )

  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-[#0f2a4d] mb-2">Manage Registrations</h1>
              <p className="text-lg text-[#1a4b8c]">Create registration forms and view responses</p>
            </div>
            <Button 
              onClick={() => {
                resetForm()
                setDialogOpen(true)
              }}
              className="bg-[#0f2a4d] hover:bg-[#1a4b8c]"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Registration
            </Button>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-[#1a4b8c]" />
              </div>
            ) : (
              <Tabs defaultValue="forms" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
                  <TabsTrigger value="forms">
                    <FileText className="w-4 h-4 mr-2" />
                    Registration Forms ({registrations.length})
                  </TabsTrigger>
                  <TabsTrigger value="responses">
                    <Users className="w-4 h-4 mr-2" />
                    Responses ({responses.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="forms">
                  {registrations.length === 0 ? (
                    <p className="text-center text-gray-500 py-12">No registration forms created yet</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {registrations.map(form => (
                        <FormCard key={form._id} form={form} />
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="responses">
                  <div className="space-y-6">
                    {/* Forms List for Selection */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-[#0f2a4d]">Select a Form to View Responses</h3>
                        <Button
                          onClick={() => {
                            setSelectedForm(null)
                            fetchAllResponses()
                          }}
                          variant="outline"
                          size="sm"
                        >
                          View All
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {registrations.map(form => (
                          <Button
                            key={form._id}
                            onClick={() => fetchResponsesForForm(form._id)}
                            variant={selectedForm === form._id ? "default" : "outline"}
                            className={`justify-between h-auto py-3 ${selectedForm === form._id ? 'bg-[#0f2a4d]' : ''}`}
                          >
                            <span className="flex-1 text-left truncate">{form.title}</span>
                            <span className="ml-2 text-xs bg-white text-[#0f2a4d] px-2 py-1 rounded">
                              {getResponseCount(form._id)}
                            </span>
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Responses Table */}
                    {responsesLoading ? (
                      <div className="flex justify-center items-center py-12">
                        <Loader2 className="w-8 h-8 animate-spin text-[#1a4b8c]" />
                      </div>
                    ) : responses.length === 0 ? (
                      <p className="text-center text-gray-500 py-12">
                        {selectedForm ? 'No responses for this form yet' : 'No responses yet'}
                      </p>
                    ) : (
                      <>
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-bold text-[#0f2a4d]">
                            {selectedForm 
                              ? `Responses for: ${registrations.find(f => f._id === selectedForm)?.title}` 
                              : 'All Responses'}
                          </h3>
                          <Button
                            onClick={exportToCSV}
                            variant="outline"
                            size="sm"
                            className="bg-green-50 hover:bg-green-100"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Export CSV
                          </Button>
                        </div>
                        <div className="border rounded-lg overflow-hidden">
                          <Table>
                            <TableHeader>
                              <TableRow className="bg-[#0f2a4d]">
                                <TableHead className="text-white">Name</TableHead>
                                <TableHead className="text-white">Email</TableHead>
                                <TableHead className="text-white">Phone</TableHead>
                                <TableHead className="text-white">Course</TableHead>
                                <TableHead className="text-white">Semester</TableHead>
                                {!selectedForm && <TableHead className="text-white">Form</TableHead>}
                                <TableHead className="text-white">Submitted At</TableHead>
                                <TableHead className="text-white text-right">Actions</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {responses.map((response) => (
                                <TableRow key={response._id}>
                                  <TableCell className="font-medium">{response.name}</TableCell>
                                  <TableCell>{response.collegeMail}</TableCell>
                                  <TableCell>{response.phone}</TableCell>
                                  <TableCell>{response.course}</TableCell>
                                  <TableCell>{response.semester}</TableCell>
                                  {!selectedForm && (
                                    <TableCell className="text-sm">
                                      {response.forEvent?.title || 'N/A'}
                                    </TableCell>
                                  )}
                                  <TableCell className="text-sm text-gray-500">
                                    {new Date(response.createdAt).toLocaleString()}
                                  </TableCell>
                                  <TableCell className="text-right">
                                    <Button
                                      onClick={() => handleDeleteResponse(response._id)}
                                      variant="ghost"
                                      size="sm"
                                      className="text-red-600 hover:text-red-800 hover:bg-red-50"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </div>

      {/* Add/Edit Registration Form Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingForm ? 'Edit Registration Form' : 'Create Registration Form'}
            </DialogTitle>
            <DialogDescription>
              {editingForm ? 'Update registration form details' : 'Fill in the details to create a new registration form'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Tech Workshop Registration"
                required
              />
            </div>

            <div>
              <Label htmlFor="content">Description *</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Describe the event or purpose of this registration"
                required
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="uploadedBy">Uploaded By *</Label>
              <Input
                id="uploadedBy"
                value={formData.uploadedBy}
                onChange={(e) => setFormData({ ...formData, uploadedBy: e.target.value })}
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <Label htmlFor="eventAt">Event Date *</Label>
              <Input
                id="eventAt"
                type="date"
                value={formData.eventAt}
                onChange={(e) => setFormData({ ...formData, eventAt: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="image">Registration Form Image (Optional)</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="flex-1"
                />
                {imagePreview && (
                  <div className="relative w-20 h-20 rounded overflow-hidden">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setDialogOpen(false)}
                className="flex-1"
                disabled={uploading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#0f2a4d] hover:bg-[#1a4b8c]"
                disabled={uploading}
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {editingForm ? 'Updating...' : 'Creating...'}
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    {editingForm ? 'Update Form' : 'Create Form'}
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

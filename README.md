**get and send data to backend from STC main site**

registration ke liye us page pr sabhi registration form lo and us particular event ke registration form pr click krne pr form ayega uska fill krne ko. '/api/admin/registration':Get

/test dekh lena for proper information how system works

form meh details lelena 
Full Name *
    Enter your full name
College Email *
    your.email@iitp.ac.in
Send OTP btn
Phone Number *
    10-digit mobile number
Course *
    e.g., B.Tech CSE

pehle otp send krna and otp lene ke baad hei form submit krna

otp bhejne ke liye
const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.collegeMail,
          event: selectedForm?.title || 'Event Registration',
        }),
      })

and submit yaha krna
const response = await fetch('/api/admin/registration/responses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          forEvent: selectedForm?._id,
          name: formData.name,
          collegeMail: formData.collegeMail,
          phone: formData.phone,
          course: formData.course,
          semester: parseInt(formData.semester),
          otp: formData.otp,
        }),
      })

error and response proper show kr dena and wese toh backend meh iitp.ac.in ke liye validation hai but frontend meh bhi kr lena



baki main site meh data use krne ke liye sab api pr get request lelo
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from decouple import config
import random
from django.core.cache import cache
import http.client
from twilio.rest import Client

username=config('username')
password=config('password')

account_sid=config('account_sid')
auth_token=config('auth_token')

#Function to send an otp on email for verification

def send_mail(user,html=None,text='Email_body',subject='Confirmation',from_email='',to_emails=[]):


    otp_gen = random.randint(1000,9999)
    user.email_otp  = otp_gen
    user.save()

    assert isinstance(to_emails,list)
    msg=MIMEMultipart('alternative')
    msg['From']=from_email
    msg['To']=", ".join(to_emails)
    msg['Subject']=subject
    txt_part=MIMEText(text,'plain')
    msg.attach(txt_part)

    html_part = MIMEText(f"<p>Here is you email verification OTP - {otp_gen}</p><h1>{html}</h1>", 'html')
    msg.attach(html_part)
    msg_str=msg.as_string()

    server=smtplib.SMTP(host='smtp.gmail.com',port=587)
    server.ehlo()
    server.starttls()
    server.login(username,password)
    server.sendmail(from_email,to_emails,msg_str)
    server.quit()



#Function to send an otp on mobile number for verifcation

def send_otp(phone_number, user_obj):

    otp_gen = random.randint(1000,9999)

    client = Client(account_sid, auth_token)

    message = client.messages.create(
                    body='Your verification OTP is '+str(otp_gen),
                    from_='+12626003482',
                    to=phone_number
                    )

    print(message.sid)

    user_obj.phone_otp  = otp_gen
    user_obj.save()
    return True



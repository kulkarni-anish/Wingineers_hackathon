import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from decouple import config

username=config('username')
password=config('password')

def send_mail(tk,html=None,text='Email_body',subject='Confirmation',from_email='',to_emails=[]):
    assert isinstance(to_emails,list)
    msg=MIMEMultipart('alternative')
    msg['From']=from_email
    msg['To']=", ".join(to_emails)
    msg['Subject']=subject
    txt_part=MIMEText(text,'plain')
    msg.attach(txt_part)

    html_part = MIMEText(f"<p>Here is your account verification http://127.0.0.1:8000/verify/{tk}</p><h1>{html}</h1>", 'html')
    msg.attach(html_part)
    msg_str=msg.as_string()

    server=smtplib.SMTP(host='smtp.gmail.com',port=587)
    server.ehlo()
    server.starttls()
    server.login(username,password)
    server.sendmail(from_email,to_emails,msg_str)
    server.quit()
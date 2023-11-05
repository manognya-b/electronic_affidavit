# electronic_affidavit
A facial recognition system created using YOLOv5, MERN and FASTAPI.

## Initial Motivation:

YOLOv5 is a well known deep learning (object detection using computer vision) model, built around a convolutional neural network and highly capable of recognising and classifying objects into classes preset by the user while training. While it was not explicitly built for face recognition, what if each person was assigned a “class” and the algorithm was trained on this? This was the initial approach for Electronic Affidavit, a web-based application that allows a registered user to detect the identity of any person within the model’s dataset.

## Technology Stack:

**Front End:** ReactJS <br>
**Back End:** Node.js, Express.js, FAST (API integration) <br>
**Model:** YOLOv5 <br>
**Database:** MongoDB <br>
<br>
(Image dataset not included in repo files due to privacy concerns.)

## How it works: 

Upon running the application, the login page plays the role of the landing page. <br> 
<br>
![WhatsApp Image 2023-06-16 at 11 08 04](https://github.com/manognya-b/electronic_affidavit/assets/100461186/10053e65-3ffd-46bb-aaf4-011a7bda6194) <br>

In case the user is not part of the app's database yet, they register first.<br> 
<br>
![WhatsApp Image 2023-06-16 at 11 08 35](https://github.com/manognya-b/electronic_affidavit/assets/100461186/7f575873-6765-41be-81c2-5585fef22304) <br>

If the registration is successful, the user is notified of the same.<br>
<br>
![WhatsApp Image 2023-06-16 at 11 10 25](https://github.com/manognya-b/electronic_affidavit/assets/100461186/01bdcf32-c7ce-4dd4-a230-c85ea47faee7)<br>

Now, re-login is required for validation and ensuring the database has, in fact, correctly entered the user details.<br>
<br>
![WhatsApp Image 2023-06-16 at 11 11 21](https://github.com/manognya-b/electronic_affidavit/assets/100461186/4ac8b10b-0772-49e6-a12a-c11f353ea9db)<br>

Welcome to the user homepage. Upload a file to detect whether it matches anyone in your list of "named" faces.<br>
<br>
![WhatsApp Image 2023-06-16 at 11 11 38](https://github.com/manognya-b/electronic_affidavit/assets/100461186/f4c10e39-e0c6-4b18-80a4-a2932abdfc5d)<br>

Submit the uploaded image.<br>
<br>
![ma face](https://github.com/manognya-b/electronic_affidavit/assets/100461186/307e4ebe-d7d1-4daa-bffa-5ac1836b2f8e)<br>

Voila! We have a match!<br>
<br>
![ma face 2](https://github.com/manognya-b/electronic_affidavit/assets/100461186/ff404dfa-e4c2-4cd4-8437-34a82bac9e1f)<br>


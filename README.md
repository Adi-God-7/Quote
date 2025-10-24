# 📝 Quote App

![Quotes App](https://img.shields.io/badge/Quotes-App-FF0080?style=for-the-badge&logo=appveyor)

A modern, interactive web application to explore, add, and manage quotes.  

💡 **Live Demo:** [https://quote-sjaz.onrender.com](https://quote-sjaz.onrender.com)

---

## **Features**

- 🌟 Get a **Random Quote** for daily inspiration  
- 📚 View **All Quotes** in a beautiful, animated card layout  
- ✍️ **Add Your Own Quotes** with author information  
- 🗑️ **Delete Quotes** (available in the All Quotes section)  
- 📱 Fully **responsive** on mobile and desktop  
- 🎨 Sleek **glassmorphism design** with subtle animations  

---

## **Tech Stack**

### **Frontend**
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)  
![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF0080?style=flat-square&logo=framer&logoColor=white)  
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

### **Backend**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)  
![Express.js](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)  
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)  

### **Deployment**
![Render](https://img.shields.io/badge/Render-FF3E00?style=flat-square&logo=render&logoColor=white)

---

## **Screenshots**

![Home Page](Home.png)  
![All Quotes](Quotes.png)  
![Add Quote](AddQuote.png)

---

## **API Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/quotes/fetchallquotes` | Get all quotes |
| GET    | `/api/quotes/randomquote`    | Get a random quote |
| POST   | `/api/quotes/addquote`       | Add a new quote |
| DELETE | `/api/quotes/deletequote/:id`| Delete a quote |

---

## **Setup & Installation**

### **Backend**
```bash
git clone https://github.com/Adi-God-7/Quote.git
cd Quote/backend
npm install

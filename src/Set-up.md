Step 1: Folder Create 

Desktop वर किंवा D Drive मध्ये एक folder बनव. 

उदा. 

Automation-Practice 

त्याच्या आत: 

Automation-Practice 
└── TypeScript-Basics 

 
 

Step 2: VS Code Open 

VS Code उघड. 

File → Open Folder 

TypeScript-Basics folder निवड. 

 
 

Step 3: Terminal Open 

VS Code मध्ये: 

Terminal → New Terminal 

किंवा 

Ctrl + ` 

 
 

Step 4: Check Node.js 

Terminal मध्ये: 

node -v 

आणि 

npm -v 

Version दिसली तर OK. 

जर command not found आला तर आधी Node.js install करावं लागेल. 

Node.js Official Website 

 
 

Step 5: Initialize Project 

Terminal मध्ये: 

npm init -y 

यामुळे package.json तयार होईल. 

 
 

Step 6: Install TypeScript 

npm install typescript --save-dev 

 
 

Step 7: Create tsconfig 

npx tsc --init 

यामुळे: 

tsconfig.json 

तयार होईल. 

 
 

Step 8: Create Source Folder 

Folder structure: 

TypeScript-Basics 
│ 
├── src 
├── package.json 
├── tsconfig.json 

 
 

Step 9: First TypeScript File 

src मध्ये: 

day1.ts 

Create कर. 

Code: 

let name: string = "Gajanan"; 
 
console.log(name); 

 
 

Step 10: Run File 

Compile: 

npx tsc 

Run: 

node src/day1.js 

Output: 

Gajanan 

 
 

GitHub Connect करण्याआधी 

Git install आहे का check कर: 

git --version 

जर version दिसली तर OK. 

नाही तर install कर: 

Git Official Website 

 
 

Step 11: Configure Git 

Terminal: 

git config --global user.name "Your Name" 

git config --global user.email "your-email@example.com" 

Check: 

git config --list 

 
 

Step 12: GitHub Repository Create 

GitHub वर login कर. 

GitHub 

New Repository: 

typescript-basics 

Public ठेव. 

Create Repository. 

 
 

Step 13: Connect Local Project 

VS Code Terminal: 

git init 

git add . 

git commit -m "Initial commit" 

 
 

Step 14: Connect Remote Repo 

GitHub वर repository तयार झाल्यावर commands मिळतील. 

साधारण: 

git remote add origin https://github.com/USERNAME/typescript-basics.git 

git branch -M main 

git push -u origin main 

 
 

Step 15: Daily Workflow 

कोड लिहिल्यावर: 

git add . 

git commit -m "Day 1 TypeScript Basics" 

git push 

 
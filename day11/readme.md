# DAY11 Assignment - Node.js and Express

## Folder Structure
Create a folder named `DAY11` and place all the files in it as follows:

```
DAY11/
├── package.json
├── sectionB_q1_basic_server.js
├── sectionB_q2_html_server.js
├── data.html
├── profile.html
├── addition.html
├── subtraction.html
├── multiplication.html
├── division.html
├── sectionC_q1_express_basic.js
├── sectionC_q2_express_arithmetic.js
├── sectionC_q3_calculator_server.js
├── calculator.html
├── sectionC_q4_register_server.js
└── register.html
```

## Setup Instructions

### 1. Initialize the Project
```bash
cd DAY11
npm init -y
npm install express
```

Or simply copy the provided `package.json` file to the DAY11 folder and run:
```bash
cd DAY11
npm install
```

### 2. Running Each Question

#### Section B - Question 1
```bash
node sectionB_q1_basic_server.js
```
Visit: http://localhost:3000/data and http://localhost:3000/profile

#### Section B - Question 2
```bash
node sectionB_q2_html_server.js
```
Visit: http://localhost:3001/data and http://localhost:3001/profile
**Make sure `data.html` and `profile.html` are in the same directory!**

#### Section B - Question 3
Open the HTML files directly in browser:
- `addition.html`
- `subtraction.html`
- `multiplication.html`
- `division.html`

#### Section C - Question 1
```bash
node sectionC_q1_express_basic.js
```
Visit: http://localhost:3002/data and http://localhost:3002/profile

#### Section C - Question 2
```bash
node sectionC_q2_express_arithmetic.js
```
Visit: http://localhost:3003/
**Make sure all arithmetic HTML files are in the same directory!**

#### Section C - Question 3
```bash
node sectionC_q3_calculator_server.js
```
Visit: http://localhost:3004/calculator
**Make sure `calculator.html` is in the same directory!**

#### Section C - Question 4
```bash
node sectionC_q4_register_server.js
```
Visit: http://localhost:3005/register
**Make sure `register.html` is in the same directory!**

## Alternative: Using npm scripts
After running `npm install`, you can use these commands:

```bash
npm run sectionB-q1
npm run sectionB-q2
npm run sectionC-q1
npm run sectionC-q2
npm run sectionC-q3
npm run sectionC-q4
```

## Important Notes

1. **File Paths**: All HTML files must be in the same directory as their corresponding server files
2. **Port Numbers**: Each server runs on different ports to avoid conflicts
3. **Express Installation**: Make sure to install Express before running Section C questions
4. **Browser Testing**: Test each endpoint in your browser to ensure everything works correctly

## Troubleshooting

- If you get "Cannot find module 'express'", run `npm install express`
- If you get "File not found" errors, check that HTML files are in the correct directory
- If ports are busy, you can change the PORT variables in the server files
- Make sure to stop previous servers (Ctrl+C) before starting new ones
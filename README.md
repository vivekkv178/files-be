# Welcome to My-Files Application!

![Placeholder Image](https://raw.githubusercontent.com/vivekkv178/cdn/main/files/Thumbnail.png)

Looking for a streamlined solution to securely upload, process, and manage files? **My-Files** is designed to simplify file management by combining modern technology with a user-friendly interface. This application ensures secure uploads, efficient data processing, and powerful search capabilities—all with seamless integration.

---

**Key Features:**

1.  **Secure File Uploads:** Upload your files securely to AWS S3 with dynamically generated pre-signed URLs, ensuring data integrity and safety.
2.  **Dynamic File Processing:** Automatically process uploaded files, parse CSV data, and store it efficiently in MongoDB for easy access and management.
3.  **Data Exploration:**

    - View file data dynamically with **server-side pagination** for a smooth user experience.
    - Search and filter data efficiently with an integrated **AG Grid** on the frontend.

4.  **User-Specific Management:** Each user can manage their own files, ensuring privacy and customization:

    - View all uploaded files.
    - Search and filter file data seamlessly.

---

This platform is built for security, scalability, and performance, making it ideal for managing large datasets and enabling powerful file management capabilities for your users.

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (version 20 or higher)
- npm (Node package manager)
- Git

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/vivekkv178/files-be.git
   cd files-be
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

### Configuration

Make sure to set up your environment variables. Create a `.env` file in the root of your project and add the necessary configurations.

#### Backend Environment Variables

```plaintext
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>/<dbname>?retryWrites=true&w=majority&appName=<appname>
AWS_ACCESS_KEY_ID=key
AWS_SECRET_ACCESS_KEY=secret
AWS_REGION=ap-southeast-1
```

### Running the Application

To start the development server, run:

```bash
npm run start:dev
```

Open your browser and navigate to [http://localhost:3001](http://localhost:3001) to view your application.

---

**Start using My-Files today and unlock effortless file management for your applications!**

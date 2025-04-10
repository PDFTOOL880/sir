# PDF Processor

## Setup and Configuration

### Environment Setup
1. Copy the example environment file:
```bash
cp .env.local.example .env.local
```

2. Configure your environment variables in `.env.local`:
```env
CONVERTAPI_SECRET=your_convertapi_secret
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_generated_secret
```

### Testing the Configuration

#### 1. Test ConvertAPI Setup
Visit:
```
http://localhost:3000/api/convert/word-to-pdf/test
```

Expected successful response:
```json
{
  "status": "success",
  "message": "ConvertAPI configuration is valid",
  "data": {
    "secondsLeft": 1500,
    "secret": "valid"
  }
}
```

#### 2. Test MongoDB Connection
Visit:
```
http://localhost:3000/api/test/mongodb
```

Expected successful response:
```json
{
  "status": "success",
  "message": "MongoDB connection successful",
  "data": {
    "database": "pdf-processor",
    "connection": "valid",
    "readyState": 1
  }
}
```

## Word to PDF Conversion

### Features
- Convert Word documents (DOC/DOCX) to PDF
- Secure cloud-based conversion
- MongoDB storage for tracking conversions
- Progress tracking and error handling

### FAQs

#### General Questions
1. **What file types are supported?**
   - Microsoft Word (.doc, .docx)
   - The output is always PDF format

2. **Is there a file size limit?**
   - Free plan: Up to 100MB per file
   - Paid plans: Up to 2GB per file

3. **Where is data stored?**
   - Files are processed through ConvertAPI
   - Conversion records in MongoDB
   - No permanent file storage

#### Technical Questions
1. **Testing your setup:**
   - Use /api/convert/word-to-pdf/test for ConvertAPI
   - Use /api/test/mongodb for database
   - Check server logs for detailed errors

2. **Common Issues:**
   - Invalid API credentials
   - MongoDB connection errors
   - Network connectivity
   - File size limits

### Troubleshooting

#### API Configuration
1. ConvertAPI Issues:
   - Verify secret key
   - Check remaining seconds
   - Monitor rate limits

2. MongoDB Issues:
   - Check connection string
   - Verify credentials
   - Test network access
   - Check database permissions

### Security Notes
- Store credentials securely
- Use environment variables
- Regular security audits
- Monitor access logs

### Support Resources
- [ConvertAPI Docs](https://www.convertapi.com/doc)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [NextAuth.js Docs](https://next-auth.js.org/)

### Development Notes
1. Testing:
```bash
# Start server
npm run dev

# Test ConvertAPI
curl http://localhost:3000/api/convert/word-to-pdf/test

# Test MongoDB
curl http://localhost:3000/api/test/mongodb
```

2. Monitoring:
   - Check ConvertAPI dashboard
   - Monitor MongoDB Atlas
   - Review application logs
   - Track error rates#   s i r  
 #   s i r  
 
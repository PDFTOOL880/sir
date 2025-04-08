export async function initializeGoogleDrive() {
  try {
    // Load Google API Client
    await new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://apis.google.com/js/api.js'
      script.onload = resolve
      document.head.appendChild(script)
    })

    // Initialize Google API client
    await new Promise((resolve) => {
      window.gapi.load('client:auth2', resolve)
    })

    // Initialize client with credentials
    await window.gapi.client.init({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
      scope: 'https://www.googleapis.com/auth/drive.readonly'
    })
  } catch (error) {
    console.error('Error initializing Google Drive:', error)
    throw new Error('Failed to initialize Google Drive')
  }
}

export async function selectFileFromGoogleDrive(): Promise<File> {
  try {
    // Sign in the user if not already signed in
    if (!window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
      await window.gapi.auth2.getAuthInstance().signIn()
    }

    // Open Google Drive picker
    const response = await window.gapi.client.drive.files.list({
      q: "mimeType='application/pdf'",
      fields: 'files(id, name)',
      pageSize: 10
    })

    const files = response.result.files
    if (!files || files.length === 0) {
      throw new Error('No PDF files found in Google Drive')
    }

    // Get the first file's metadata
    const file = files[0]
    const fileId = file.id

    // Download the file content
    const fileResponse = await window.gapi.client.drive.files.get({
      fileId: fileId,
      alt: 'media'
    })

    // Convert the response to a File object
    const blob = new Blob([fileResponse.body], { type: 'application/pdf' })
    return new File([blob], file.name, { type: 'application/pdf' })
  } catch (error) {
    console.error('Error selecting file from Google Drive:', error)
    throw new Error('Failed to select file from Google Drive')
  }
}

export async function initializeDropbox() {
  try {
    // Load Dropbox SDK
    await new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://www.dropbox.com/static/api/2/dropins.js'
      script.id = 'dropboxjs'
      script.setAttribute('data-app-key', process.env.NEXT_PUBLIC_DROPBOX_APP_KEY || '')
      script.onload = resolve
      document.head.appendChild(script)
    })
  } catch (error) {
    console.error('Error initializing Dropbox:', error)
    throw new Error('Failed to initialize Dropbox')
  }
}

export function selectFileFromDropbox(): Promise<File> {
  return new Promise((resolve, reject) => {
    try {
      window.Dropbox.choose({
        success: function(files: any[]) {
          // Download the selected file
          fetch(files[0].link)
            .then(response => response.blob())
            .then(blob => {
              const file = new File([blob], files[0].name, { type: 'application/pdf' })
              resolve(file)
            })
            .catch(error => {
              console.error('Error downloading file from Dropbox:', error)
              reject(new Error('Failed to download file from Dropbox'))
            })
        },
        cancel: function() {
          reject(new Error('File selection cancelled'))
        },
        linkType: 'direct',
        multiselect: false,
        extensions: ['.pdf']
      })
    } catch (error) {
      console.error('Error selecting file from Dropbox:', error)
      reject(new Error('Failed to select file from Dropbox'))
    }
  })
}
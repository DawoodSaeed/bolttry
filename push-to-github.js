const fs = require('fs');
const path = require('path');
const https = require('https');

const token = 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN';
const repoName = 'health-care-dashboard';

// Function to create a repository
function createRepo() {
  // ... (keep the existing createRepo function)
}

// Function to push a file to the repository
function pushFile(repo, filePath) {
  // ... (keep the existing pushFile function)
}

// Main function to create repo and push files
async function pushToGitHub() {
  try {
    const repo = await createRepo();
    console.log(`Repository created: ${repo.html_url}`);

    const files = [
      'package.json',
      'angular.json',
      'tsconfig.json',
      'tsconfig.app.json',
      'src/index.html',
      'src/main.ts',
      'src/global_styles.css',
      'src/app/app.module.ts',
      'src/app/app.component.ts',
      'src/app/components/login/login.component.ts',
      'src/app/components/dashboard/dashboard.component.ts',
      'src/app/components/appointment/appointment.component.ts',
      'src/app/components/chat/chat.component.ts',
      'src/app/components/doctor-registration/doctor-registration.component.ts',
      'server/server.ts',
      'netlify.toml',
      '.gitignore'
    ];

    for (const file of files) {
      await pushFile(repo, file);
      console.log(`Pushed ${file}`);
    }

    console.log('All files pushed successfully!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

pushToGitHub();
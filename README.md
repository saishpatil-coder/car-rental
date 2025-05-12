Luxury Car Rental Website
A mobile-first, responsive website for Luxury Car Rental in Calangute, Goa, built with React, Vite, and Tailwind CSS.
Prerequisites

Node.js (version 16 or higher)
npm

Setup

Clone the repository:
git clone <repository-url>
cd luxury-car-rental


Install dependencies:
npm install


Add images to the public folder:

mini-cooper.jpg
bullet.jpg
car.jpg
scooter.jpg
hero-bg.jpg (in src/assets/)


Update image paths in src/components/Vehicles.jsx if using custom images.

Update the phone number in src/components/Contact.jsx with your business number.


Running Locally
Start the development server:
npm run dev

Open http://localhost:5173 in your browser.
Building for Production
Build the project:
npm run build

The optimized files will be in the dist folder.
Deployment
Deploy the dist folder to a static hosting service like Netlify, Vercel, or GitHub Pages.

Netlify:

Drag and drop the dist folder into the Netlify dashboard.
Or use the Netlify CLI: netlify deploy --prod.


Vercel:

Connect the repository to Vercel via the dashboard.
Set the build command to npm run build and output directory to dist.


GitHub Pages:

Push the dist folder to a gh-pages branch.
Enable GitHub Pages in the repository settings.



Customization

Images: Replace placeholder images in public with your own.
Colors: Modify Tailwind classes in components (e.g., bg-blue-900, bg-yellow-400) to match your brand.
Contact Details: Update phone number and WhatsApp link in Contact.jsx.


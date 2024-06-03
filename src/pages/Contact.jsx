

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <p className="text-lg mb-4">
          If you have any questions or inquiries, please feel free to contact us using the information below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <p className="text-lg mb-2">123 Main Street</p>
            <p className="text-lg mb-2">City, State ZIP</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p className="text-lg mb-2">Phone: (123) 456-7890</p>
            <p className="text-lg mb-2">Email: info@shoeshop.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
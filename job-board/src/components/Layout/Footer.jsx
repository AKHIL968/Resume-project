

const Footer = () => {
  return (
    // <div className="text-center">
    // <p>&copy; {new Date().getFullYear()} Job Hub made by Akhil Mali</p>
    // </div>
    <footer className=" fixed bottom-0 w-full">
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <p className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Expense Tracker by Akhil Mali. All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer
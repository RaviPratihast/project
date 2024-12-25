export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
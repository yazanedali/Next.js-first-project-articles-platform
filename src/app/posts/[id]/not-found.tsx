import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-rose-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto">
        {/* أيقونة كبيرة */}
        <div className="text-rose-500 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          المقال غير موجود
        </h1>

        {/* الرسالة التوضيحية */}
        <p className="text-lg text-gray-600 mb-8">
          عذراً، يبدو أن المقال الذي تبحث عنه قد تم إزالته أو أنه غير متاح حالياً.
        </p>

        {/* زر العودة */}
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-rose-500 text-white font-medium rounded-lg hover:bg-rose-600 transition-colors shadow-md hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          العودة للصفحة الرئيسية
        </Link>

        {/* نص إضافي */}
        <p className="mt-8 text-sm text-gray-500">
          إذا كنت تعتقد أن هذا خطأ، يرجى التواصل مع الدعم الفني
        </p>
      </div>
    </div>
  )
}
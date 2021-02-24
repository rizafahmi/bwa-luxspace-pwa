import Header from "../components/Header.js";

function Profile() {
  return (
    <>
      <Header />
      <div className="py-12">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Profile
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This is your dummy profile. Just get it on with it.</p>
            </div>
            <div className="mt-5 flex justify-start mx-auto items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center mr-6 px-4 py-2 border border-transparent font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:text-sm"
              >
                Subscribe to Notification
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:text-sm"
              >
                Test Push Notification
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

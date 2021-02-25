import Header from "../components/Header.js";

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function subscribe() {
  const key =
    "BD1z4z06UTMuFMu6rk1KOlqtw4DBsHUNSMVN_3cKPnzuOUqowN13ocmh_vjJLkxvxREl21zY85OQt53ZSl9bfW8";
  try {
    const sub = await global.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array(key),
    });
    console.log("Subscribed!");
  } catch (error) {
    console.error("Cannot subscribe.");
  }
}

function testPushMessage() {
  global.registration.showNotification("Test Message", {
    body: "Success!",
  });
}

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
                onClick={subscribe}
              >
                Subscribe to Notification
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:text-sm"
                onClick={testPushMessage}
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

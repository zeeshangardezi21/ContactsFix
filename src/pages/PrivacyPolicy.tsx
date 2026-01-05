
const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
            <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
                <div className="bg-indigo-600 py-8 px-6 text-center">
                    <h1 className="text-3xl font-bold text-white">Privacy Policy for ContactsFix</h1>
                    <p className="mt-2 text-indigo-100">Effective Date: January 5, 2026</p>
                </div>

                <div className="p-8 space-y-8 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-indigo-700 border-b border-indigo-100 pb-2 mb-4">1. Introduction</h2>
                        <p>
                            "ContactsFix" ("we", "our", or "the App") is designed to respect your privacy. This Privacy Policy explains how our application handles your data. The core principle of our App is that <strong>we do not store your personal data on our servers</strong>. All processing happens locally on your device or directly between your device and your chosen third-party providers (Google and Apple iCloud).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-indigo-700 border-b border-indigo-100 pb-2 mb-4">2. Data Collection and Usage</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-slate-700">2.1 Contact Information</h3>
                                <p>The App accesses your contacts ("Address Book") solely for the purpose of:</p>
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Displaying them to you within the App.</li>
                                    <li>Syncing them between your local device and your connected accounts (Google Contacts and iCloud).</li>
                                    <li>Removing duplicates or merging contacts as directed by you.</li>
                                </ul>
                                <p className="mt-2 text-slate-600 italic">We do not collect, upload, or sell your contact list. Your contacts never leave your control and are only transmitted directly to the accounts you explicitly log in to (Google or iCloud).</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-slate-700">2.2 Account Credentials</h3>
                                <ul className="list-disc ml-6 mt-2 space-y-2">
                                    <li><strong>Google:</strong> We use secure OAuth 2.0 authentication. We never see or store your Google password. We only access the permissions you explicitly grant (managing contacts).</li>
                                    <li><strong>iCloud:</strong> We require an App-Specific Password to connect via standard CardDAV protocols. This password is stored securely on your device's Keychain/Keystore and is only used to authenticate direct requests to Apple's iCloud servers. We do not transmit this password to any other party.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-indigo-700 border-b border-indigo-100 pb-2 mb-4">3. Storage and Security</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>Local Processing:</strong> All sync logic (comparing, merging, updating) runs locally on your smartphone.</li>
                            <li><strong>No Backend:</strong> We do not operate a backend server/database for user data. We cannot see your contacts, even if we wanted to.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-indigo-700 border-b border-indigo-100 pb-2 mb-4">4. Permissions Used</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>Read/Write Contacts:</strong> Essential for the App's core functionality (syncing).</li>
                            <li><strong>Internet Access:</strong> Required to communicate directly with Google (API) and Apple (CardDAV) servers.</li>
                            <li><strong>Camera (Optional):</strong> Used only if you choose to scan a QR code or take a photo for a contact profile.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-indigo-700 border-b border-indigo-100 pb-2 mb-4">5. Third-Party Services</h2>
                        <p>The App interacts with the following services upon your request:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Google Privacy Policy</a></li>
                            <li><a href="https://www.apple.com/legal/privacy/data/en/icloud/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Apple iCloud Privacy Policy</a></li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-indigo-700 border-b border-indigo-100 pb-2 mb-4">6. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact the developer via the support channel provided on the App Store page or reach out to us at <a href="mailto:zeeshangardezi21@gmail.com" className="text-indigo-600 hover:underline">zeeshangardezi21@gmail.com</a>.
                        </p>
                    </section>
                </div>

                <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
                    <p className="text-slate-500 text-sm">&copy; 2026 ContactsFix. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

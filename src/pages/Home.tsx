import { Link } from '@tanstack/react-router';
import logo from '../assets/logo.png';
import ss1 from '../assets/screenshot01.png';
import ss2 from '../assets/screenshot02.png';
import ss3 from '../assets/screenshot03.png';
import ss4 from '../assets/screenshot04.png';
import promoVideo from '../video/ContactsFix.mp4';

export const Home = () => {
	return (
		<div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
			{/* Navigation */}
			<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-20">
						<div className="flex items-center space-x-3">
							<img src={logo} alt="ContactsFix Logo" className="h-10 w-auto" />
							<span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
								ContactsFix
							</span>
						</div>
						<div className="hidden md:flex space-x-8 items-center">
							<a href="#features" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Features</a>
							<a href="#showcase" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Showcase</a>
							<Link to="/privacypolicy" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Privacy Policy</Link>
							<button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
								Get Started
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
				<div className="max-w-7xl mx-auto text-center">
					<div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold tracking-wide uppercase">
						Privacy-First Contact Management
					</div>
					<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
						Clean and Sync Your <br />
						<span className="text-indigo-600">Contacts Seamlessly</span>
					</h1>
					<p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
						The ultimate tool to merge duplicates, sync across Google and iCloud, and keep your address book pristine. All processed locally on your device.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
							Download for iOS
						</button>
						<button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all">
							View on App Store
						</button>
					</div>
				</div>
			</section>

			{/* Stats/Proof Section */}
			<section className="py-12 bg-slate-50/50 border-y border-slate-100">
				<div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-8 text-center">
					<div>
						<div className="text-4xl font-bold text-slate-900">100%</div>
						<div className="text-slate-500 font-medium">Local Processing</div>
					</div>
					<div>
						<div className="text-4xl font-bold text-slate-900">ZERO</div>
						<div className="text-slate-500 font-medium">Data Stored on Servers</div>
					</div>
					<div>
						<div className="text-4xl font-bold text-slate-900">SECURE</div>
						<div className="text-slate-500 font-medium">OAuth 2.0 Auth</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
						<p className="text-slate-600 max-w-xl mx-auto">Powerful features designed to make contact management effortless while keeping your data private.</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Feature 1 */}
						<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
							<div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-3">iCloud & Google Sync</h3>
							<p className="text-slate-600">Securely bridge your contacts across different ecosystems using standard protocols and OAuth 2.0.</p>
						</div>

						{/* Feature 2 */}
						<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
							<div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-3">Duplicate Removal</h3>
							<p className="text-slate-600">Smart algorithms detect and merge duplicate contacts based on names, numbers, and emails with one tap.</p>
						</div>

						{/* Feature 3 */}
						<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
							<div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-3">Privacy First</h3>
							<p className="text-slate-600">Your data never leaves your device. We have no servers, no database, and no access to your personal info.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Showcase Section */}
			<section id="showcase" className="py-24 bg-white border-t border-slate-100">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold mb-4 italic">App Showcase</h2>
						<p className="text-slate-600 max-w-2xl mx-auto text-lg mb-12">See how ContactsFix transforms your experience with a clean, powerful, and private interface.</p>
					</div>

					<div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
						{/* Screenshot Grid (Left side, 2 columns) */}
						<div className="flex-1 grid grid-cols-2 gap-4 md:gap-6 w-full max-w-xl">
							{[ss1, ss2, ss3, ss4].map((src, i) => (
								<div key={i} className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:scale-105 duration-300">
									<img src={src} alt={`Screenshot ${i + 1}`} className="w-full h-auto object-cover" />
								</div>
							))}
						</div>

						{/* Video (Right side) */}
						<div className="flex-none flex justify-center">
							<div className="relative w-[280px] md:w-[320px] aspect-[9/16] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-slate-900 shadow-[0_40px_80px_-15px_rgba(79,70,229,0.25)] border-[8px] border-slate-800 animate-float">
								<video className="w-full h-full object-cover" autoPlay muted loop playsInline>
									<source src={promoVideo} type="video/mp4" />
								</video>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 px-4">
				<div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
					<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
					<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

					<h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to organize <br /> your address book?</h2>
					<p className="text-indigo-100 mb-10 text-lg relative z-10">Join thousands of users who trust ContactsFix for their contact management.</p>
					<button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all relative z-10 shadow-xl">
						Get ContactsFix Now
					</button>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 border-t border-slate-100">
				<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="flex items-center space-x-3">
						<img src={logo} alt="Logo" className="h-8 w-auto opacity-80" />
						<span className="font-bold text-slate-400">ContactsFix</span>
					</div>
					<div className="flex space-x-8 text-slate-500 font-medium">
						<a href="#" className="hover:text-indigo-600">Support</a>
						<Link to="/privacypolicy" className="hover:text-indigo-600">Privacy Policy</Link>
						<a href="mailto:zeeshangardezi21@gmail.com" className="hover:text-indigo-600">Contact</a>
					</div>
					<div className="text-slate-400 text-sm">
						&copy; 2026 ContactsFix. Handcrafted for your privacy.
					</div>
				</div>
			</footer>
		</div>
	);
};

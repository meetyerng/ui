import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
	ArrowRight,
	Users,
	Target,
	Heart,
	Calendar,
	Video,
	Briefcase,
	Sparkles,
} from "lucide-react";

const HomePage = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{ threshold: 0.1, rootMargin: "50px" }
		);

		const elements = document.querySelectorAll(
			".fade-in, .slide-in-left, .slide-in-right, .scale-in"
		);
		elements.forEach((el) => observerRef.current?.observe(el));

		return () => observerRef.current?.disconnect();
	}, []);

	const quickLinks = [
		{
			title: "អំពីយើង",
			description: "ស្វែងយល់អំពីបេសកកម្ម និងចក្ខុវិស័យរបស់យើង",
			href: "/about",
			icon: Users,
			color: "from-emerald-500 to-blue-500",
			delay: "0ms",
		},
		{
			title: "ព្រឹត្តិការណ៍",
			description: "ព័ត៌មានថ្មីៗ និងកម្មវិធីរបស់យើង",
			href: "/news-events",
			icon: Calendar,
			color: "from-blue-500 to-purple-500",
			delay: "200ms",
		},
		{
			title: "វីដេអូ",
			description: "មើលវីដេអូកម្មវិធី និងសកម្មភាពរបស់យើង",
			href: "/videos",
			icon: Video,
			color: "from-purple-500 to-pink-500",
			delay: "400ms",
		},
	];

	const values = [
		{
			icon: Heart,
			title: "ការបម្រើសហគមន៍",
			description: "យើងប្តេជ្ញាបម្រើសហគមន៍ខ្មែរដោយស្មោះត្រង់",
			delay: "0ms",
		},
		{
			icon: Target,
			title: "គោលដៅច្បាស់លាស់",
			description: "យើងមានគោលដៅច្បាស់លាស់ក្នុងការអភិវឌ្ឍន៍សហគមន៍",
			delay: "200ms",
		},
		{
			icon: Users,
			title: "ការសហការ",
			description: "យើងជឿជាក់លើកម្លាំងនៃការសហការ និងការចូលរួម",
			delay: "400ms",
		},
	];

	return (
		<div className="pt-20 overflow-hidden">
			{/* Hero Section */}
			<section
				ref={heroRef}
				className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 flex items-center gradient-animate"
			>
				<div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10"></div>

				{/* Floating elements */}
				<div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl float-animation"></div>
				<div
					className="absolute top-40 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl float-animation"
					style={{ animationDelay: "1s" }}
				></div>
				<div
					className="absolute bottom-40 left-20 w-24 h-24 bg-purple-200/30 rounded-full blur-xl float-animation"
					style={{ animationDelay: "2s" }}
				></div>

				<div className="container-max relative z-10">
					<div className="max-w-5xl mx-auto text-center">
						<div className="fade-in">
							<div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8 transform hover:scale-105 transition-all duration-300">
								<Sparkles className="text-emerald-600 mr-2" size={20} />
								<span className="text-gray-700 font-medium">
									ស្វាគមន៍មកកាន់សមាគមរបស់យើង
								</span>
							</div>
						</div>

						<h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 mb-8 fade-in leading-tight">
							ស្វាគមន៍មកកាន់
							<span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 gradient-animate">
								សមាគម
							</span>
						</h1>

						<p
							className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto fade-in"
							style={{ animationDelay: "300ms" }}
						>
							យើងគឺជាសមាគមដែលប្តេជ្ញាបម្រើសហគមន៍ខ្មែរ
							និងការអភិវឌ្ឍន៍វប្បធម៌ប្រពៃណីដ៏សម្បូរបែប
						</p>

						<div
							className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in"
							style={{ animationDelay: "600ms" }}
						>
							<Link
								to="/about"
								className="btn-primary text-lg px-10 py-4 group"
							>
								ស្វែងយល់បន្ថែម
								<ArrowRight
									className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
									size={20}
								/>
							</Link>
							<Link to="/contact" className="btn-outline text-lg px-10 py-4">
								ទំនាក់ទំនងយើង
							</Link>
						</div>
					</div>
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
					</div>
				</div>
			</section>

			{/* Mission Statement */}
			<section className="section-padding bg-white relative overflow-hidden">
				<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>

				<div className="container-max">
					<div className="max-w-5xl mx-auto text-center">
						<h2 className="text-5xl font-serif font-bold text-gray-900 mb-8 fade-in">
							បេសកកម្មរបស់យើង
						</h2>
						<p
							className="text-xl text-gray-700 leading-relaxed mb-16 fade-in"
							style={{ animationDelay: "200ms" }}
						>
							យើងបានប្តេជ្ញាបម្រើសហគមន៍ខ្មែរ ដោយការពង្រឹងវប្បធម៌ប្រពៃណី ការអប់រំ
							និងការអភិវឌ្ឍន៍សហគមន៍។ យើងជឿជាក់ថា
							ការចូលរួមរបស់មនុស្សគ្រប់រូបអាចបង្កើតការផ្លាស់ប្តូរវិជ្ជមាន។
						</p>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{values.map((value, index) => (
								<div
									key={index}
									className="card p-8 text-center group scale-in"
									style={{ animationDelay: value.delay }}
								>
									<div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
										<value.icon className="text-white" size={36} />
									</div>
									<h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
										{value.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{value.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Quick Links */}
			<section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative">
				<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>

				<div className="container-max relative">
					<div className="text-center mb-16">
						<h2 className="text-5xl font-serif font-bold text-gray-900 mb-6 fade-in">
							រុករកបន្ថែម
						</h2>
						<p
							className="text-xl text-gray-600 fade-in"
							style={{ animationDelay: "200ms" }}
						>
							ស្វែងយល់អំពីសកម្មភាព និងកម្មវិធីរបស់យើង
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{quickLinks.map((link, index) => (
							<Link
								key={index}
								to={link.href}
								className="card p-8 group hover:scale-105 transition-all duration-500 slide-in-left"
								style={{ animationDelay: link.delay }}
							>
								<div
									className={`w-20 h-20 bg-gradient-to-br ${link.color} rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
								>
									<link.icon className="text-white" size={36} />
								</div>
								<h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
									{link.title}
								</h3>
								<p className="text-gray-600 mb-6 leading-relaxed">
									{link.description}
								</p>
								<div className="flex items-center text-emerald-600 group-hover:text-emerald-700 font-medium">
									<span>ចូលមើល</span>
									<ArrowRight
										className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
										size={16}
									/>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-padding bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white relative overflow-hidden gradient-animate">
				<div className="absolute inset-0 bg-black/10"></div>
				<div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
				<div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

				<div className="container-max text-center relative z-10">
					<h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 fade-in">
						ចូលរួមជាមួយយើង
					</h2>
					<p
						className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed fade-in"
						style={{ animationDelay: "200ms" }}
					>
						បង្កើតការផ្លាស់ប្តូរវិជ្ជមានក្នុងសហគមន៍របស់យើង។
						ចូលរួមជាមួយយើងដើម្បីអភិវឌ្ឍន៍វប្បធម៌ និងបម្រើសហគមន៍ខ្មែរ
					</p>
					<div className="fade-in" style={{ animationDelay: "400ms" }}>
						<Link
							to="/contact"
							className="btn-secondary text-lg px-12 py-4 bg-white text-emerald-600 hover:bg-gray-100 group"
						>
							ទំនាក់ទំនងយើង
							<ArrowRight
								className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
								size={20}
							/>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;

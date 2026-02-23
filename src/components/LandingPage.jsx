import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-font-body text-slate-900 bg-gradient-to-br from-pink-50 via-indigo-50 to-cyan-50">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-indigo-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
              <img
                src="/download.png"
                alt="PPG Institute of Technology logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <p className="text-sm text-slate-500 landing-eyebrow">Institute of Technology</p>
              <p className="landing-font-display text-lg landing-subtitle">PPGIT Coimbatore</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#admissions"
              className="hidden md:inline-flex px-4 py-2 text-sm rounded-full border border-indigo-200 text-indigo-700 hover:bg-indigo-50"
            >
              Admissions
            </a>
            <Link
              to="/login"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:opacity-90"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white/80 backdrop-blur rounded-3xl border border-indigo-100 shadow-xl p-8 md:p-10">
            <p className="text-xs text-indigo-600 landing-eyebrow">PPG Institute of Technology</p>
            <h1 className="landing-font-display landing-title text-4xl md:text-5xl leading-tight mt-4">
              Learn. Build. Lead.
              <span className="block text-violet-600">Your Future Starts Here.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">
              A colorful, student-first learning ecosystem with practical labs, industry projects, campus life, and placement guidance.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold">
                Apply Now →
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-indigo-200 text-indigo-700 font-semibold bg-indigo-50/60">
                Download Brochure →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/images.jpg" alt="Student" className="h-44 w-full object-cover rounded-2xl shadow-md border border-pink-100" />
            <img src="/images%20(1).jpg" alt="Campus life" className="h-44 w-full object-cover rounded-2xl shadow-md border border-amber-100" />
            <img src="/images%20(2).jpg" alt="Education icons" className="h-44 w-full object-cover rounded-2xl shadow-md border border-sky-100" />
            <img src="/images%20(3).jpg" alt="College concept" className="h-44 w-full object-cover rounded-2xl shadow-md border border-violet-100" />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Established', value: '2008', tone: 'from-pink-50 to-rose-50' },
            { title: 'Affiliation', value: 'Anna University, Chennai', tone: 'from-indigo-50 to-blue-50' },
            { title: 'Approvals', value: 'AICTE approved, NAAC B+', tone: 'from-amber-50 to-orange-50' },
            { title: 'Campus', value: 'Saravanampatti, Coimbatore', tone: 'from-emerald-50 to-teal-50' },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`landing-reveal bg-gradient-to-br ${item.tone} border border-white rounded-2xl p-4 shadow-sm`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-xs text-slate-500 landing-eyebrow">{item.title}</p>
              <p className="mt-2 font-semibold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-xs text-[var(--landing-moss)] landing-eyebrow">About PPGIT</p>
          <h2 className="landing-font-display landing-title text-3xl mt-3">Value-based technical education with industry focus.</h2>
          <p className="mt-4 text-slate-700">
            PPG Institute of Technology (PPGIT) was established in 2008 under the P. Perichi Gounder Memorial
            Education & Charitable Trust to provide value-based technical education with industry orientation and
            research opportunities.
          </p>
          <p className="mt-4 text-slate-700">
            The institute is affiliated to Anna University, follows the university curriculum, and runs undergraduate
            and postgraduate engineering programs supported by modern classrooms, labs, and a central library.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-200">
          <img
            src="/download.jpg"
            alt="PPG Institute of Technology campus"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section id="programs" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs text-indigo-600 landing-eyebrow">Programs</p>
            <h2 className="landing-font-display landing-title text-3xl mt-3">Undergraduate & Postgraduate offerings</h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-indigo-600">
            Check eligibility →
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Undergraduate (UG)</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>B.Tech / B.E. — Computer Science & Engineering (CSE)</li>
              <li>Electronics & Communication Engineering (ECE)</li>
              <li>Information Technology (IT)</li>
              <li>Mechanical Engineering / Mechatronics</li>
              <li>Agricultural / Biomedical / other specializations</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-orange-50 border border-pink-100 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Postgraduate (PG)</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>M.E. / M.Tech specializations (e.g., CAD/CAM)</li>
              <li>Additional PG programs depending on intake</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="admissions" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="bg-white border border-indigo-100 rounded-2xl p-6 shadow-sm">
          <h3 className="landing-font-display landing-title text-2xl">Admissions snapshot</h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>Eligibility: As per Anna University & Tamil Nadu common admission rules for engineering.</li>
            <li>How to apply: Online application via college admissions page / official form.</li>
            <li>Fees & scholarships: Vary by program and year — refer to the latest fee PDF.</li>
          </ul>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
              Start Application
            </a>
            <a href="#contact" className="px-4 py-2 rounded-full border border-indigo-200 text-indigo-700 bg-indigo-50/60">
              Request Brochure
            </a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-200 border border-pink-100">
          <img
            src="/images%20(1).jpg"
            alt="PPGIT front view"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section id="facilities" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs text-indigo-600 landing-eyebrow">Campus & Facilities</p>
            <h2 className="landing-font-display landing-title text-3xl mt-3">A campus built for learning and life.</h2>
          </div>
          <p className="text-sm text-slate-600">Modern labs, central library, hostels, transport, and student life.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { title: 'Labs & Computer Centre', img: '/images%20(2).jpg' },
            { title: 'Hostels & Student Support', img: '/images.jpg' },
            { title: 'Library & Auditorium', img: '/images%20(3).jpg' },
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl overflow-hidden bg-white border border-indigo-100 shadow-sm landing-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={item.img} alt={item.title} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2">
                  Modern labs, seminar halls, sports, transport, and dedicated student services.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="placements" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-xs text-indigo-600 landing-eyebrow">Placements</p>
          <h2 className="landing-font-display landing-title text-3xl mt-3">Industry readiness with placement support.</h2>
          <p className="mt-4 text-slate-700">
            PPGIT runs campus placement drives, industry workshops, and training programs to prepare students for
            recruitment. (Use verified placement stats if available.)
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Highest Package', value: '—' },
            { label: 'Average Package', value: '—' },
            { label: 'Top Recruiters', value: '—' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-100 rounded-2xl p-4 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-[var(--landing-moss)] landing-eyebrow">Testimonials</p>
        <h2 className="landing-font-display landing-title text-3xl mt-3">What alumni say</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            'Strong practical labs and supportive faculty prepared me for industry.',
            'Great campus life and placement support.',
            'The curriculum and workshops kept us industry-ready.',
          ].map((quote) => (
            <div key={quote} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <p className="text-slate-700">“{quote}”</p>
              <p className="mt-4 text-sm text-slate-500">— Alumni</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white border border-indigo-100 rounded-3xl p-8 grid md:grid-cols-2 gap-8 shadow-sm">
          <div>
            <p className="text-xs text-indigo-600 landing-eyebrow">Contact</p>
            <h2 className="landing-font-display landing-title text-3xl mt-3">Visit or talk to admissions.</h2>
            <div className="mt-4 text-slate-700 space-y-2">
              <p>Rathnagiri Road, Saravanampatti, Coimbatore – 641035.</p>
              <p>Phone: +91 90477 77277 / +91 90477 77977</p>
              <p>Email: ppgit@ppg.edu.in</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
                Apply Now
              </a>
              <a href="#" className="px-4 py-2 rounded-full border border-indigo-200 text-indigo-700 bg-indigo-50/60">
                Request Brochure
              </a>
              <a href="#" className="px-4 py-2 rounded-full border border-indigo-200 text-indigo-700 bg-indigo-50/60">
                Book Campus Visit
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              title="PPGIT Map"
              src="https://www.google.com/maps?q=PPG%20Institute%20of%20Technology%20Saravanampatti%20Coimbatore&output=embed"
              className="w-full h-72 md:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs text-indigo-600 landing-eyebrow">FAQ</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <details className="bg-white border border-indigo-100 rounded-2xl p-5">
            <summary className="font-semibold cursor-pointer">Is PPGIT AICTE approved?</summary>
            <p className="mt-3 text-slate-700">Yes, it is AICTE approved and affiliated with Anna University.</p>
          </details>
          <details className="bg-white border border-indigo-100 rounded-2xl p-5">
            <summary className="font-semibold cursor-pointer">Are hostels available?</summary>
            <p className="mt-3 text-slate-700">Yes — separate hostels for men and women with mess and medical support.</p>
          </details>
          <details className="bg-white border border-indigo-100 rounded-2xl p-5">
            <summary className="font-semibold cursor-pointer">How to apply?</summary>
            <p className="mt-3 text-slate-700">Use the official admission page / apply online form.</p>
          </details>
          <details className="bg-white border border-indigo-100 rounded-2xl p-5">
            <summary className="font-semibold cursor-pointer">Need help choosing a program?</summary>
            <p className="mt-3 text-slate-700">Talk to admissions via phone or request a brochure.</p>
          </details>
        </div>
      </section>

      <footer className="border-t border-indigo-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/download (2).jpg"
                alt="PPG Group of Institutions logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <p className="landing-font-display landing-subtitle text-lg">PPG Institute of Technology</p>
                <p className="text-sm text-slate-500 mt-1">AICTE approved · Affiliated to Anna University · NAAC accredited</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <a href="#about" className="hover:text-indigo-600">About</a>
              <a href="#programs" className="hover:text-indigo-600">Courses</a>
              <a href="#admissions" className="hover:text-indigo-600">Admissions</a>
              <a href="#placements" className="hover:text-indigo-600">Placements</a>
              <a href="#facilities" className="hover:text-indigo-600">Facilities</a>
              <a href="#contact" className="hover:text-indigo-600">Contact</a>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-6">© 2026 PPG Institute of Technology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

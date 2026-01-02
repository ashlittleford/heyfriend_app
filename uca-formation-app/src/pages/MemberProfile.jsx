import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Calendar, Users, CheckCircle, MapPin, ExternalLink, Download } from 'lucide-react';

const MemberProfile = () => {
  const { user } = useAuth();
  const { getMember } = useData();

  if (!user || user.role !== 'member') {
     // Ideally redirect or show access denied
     return <Layout>Access Denied</Layout>;
  }

  const member = getMember(user.id);

  if (!member) return <Layout>Loading...</Layout>;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-brand-black mb-2">Welcome, {member.fullName}</h1>
            <p className="text-gray-600">Here is your formation progress and upcoming schedule.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column: Personal Info & Status */}
            <div className="md:col-span-2 space-y-6">

                {/* Formation Panels Box */}
                <Card title="Formation Panel Dates" className="bg-gradient-to-r from-red-50 to-white border-brand-red">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                           <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Term 1</p>
                           <p className="text-lg font-bold text-brand-black">{member.panelDates?.term1 || 'TBA'}</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-gray-300"></div>
                         <div className="text-center md:text-left">
                           <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Term 2</p>
                           <p className="text-lg font-bold text-brand-black">{member.panelDates?.term2 || 'TBA'}</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-gray-300"></div>
                         <div className="text-center md:text-left">
                           <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Term 3</p>
                           <p className="text-lg font-bold text-brand-black">{member.panelDates?.term3 || 'TBA'}</p>
                        </div>
                    </div>
                </Card>

                <Card title="Formation Details">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                             <h4 className="flex items-center text-brand-red font-medium mb-3">
                                <Users className="w-5 h-5 mr-2" />
                                Formation Panel
                             </h4>
                             <ul className="space-y-2">
                                {member.formationPanelMembers && member.formationPanelMembers.map((m, idx) => (
                                    <li key={idx} className="bg-gray-50 p-3 rounded border border-gray-100 flex justify-between">
                                        <span className="font-medium text-gray-800">{m.name}</span>
                                        <span className="text-sm text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-200">{m.role}</span>
                                    </li>
                                ))}
                             </ul>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h4 className="flex items-center text-brand-red font-medium mb-3">
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    Progress
                                </h4>
                                <div className="flex items-center justify-between bg-gray-50 p-3 rounded border border-gray-100">
                                    <span className="text-gray-700">Formation Days Completed</span>
                                    <span className="text-xl font-bold text-brand-black">{member.formationDaysCompleted}</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="flex items-center text-brand-red font-medium mb-3">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    Requirements
                                </h4>
                                 <div className="flex items-center justify-between bg-gray-50 p-3 rounded border border-gray-100">
                                    <span className="text-gray-700">Walking on Country</span>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${member.walkingOnCountry === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {member.walkingOnCountry}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                 <Card title="Upcoming Dates">
                    {member.upcomingDates && member.upcomingDates.length > 0 ? (
                        <div className="space-y-3">
                            {member.upcomingDates.map((date, idx) => (
                                <div key={idx} className="flex items-start p-3 hover:bg-gray-50 rounded transition-colors border-b border-gray-100 last:border-0">
                                    <Calendar className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-800">{date.description}</p>
                                        <p className="text-sm text-gray-500">{date.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">No upcoming dates scheduled.</p>
                    )}
                </Card>
            </div>

            {/* Right Column: Resources */}
            <div className="space-y-6">
                <Card title="Resources">
                    <ul className="space-y-3">
                        <li>
                            <a href="#" className="flex items-center p-2 rounded hover:bg-gray-50 text-brand-red hover:underline transition-colors">
                                <Download className="w-4 h-4 mr-2" />
                                Formation Handbook PDF
                            </a>
                        </li>
                         <li>
                            <a href="#" className="flex items-center p-2 rounded hover:bg-gray-50 text-brand-red hover:underline transition-colors">
                                <Download className="w-4 h-4 mr-2" />
                                Reflection Guide
                            </a>
                        </li>
                         <li>
                            <a href="#" className="flex items-center p-2 rounded hover:bg-gray-50 text-brand-red hover:underline transition-colors">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                UCA Theology Library
                            </a>
                        </li>
                         <li>
                            <a href="#" className="flex items-center p-2 rounded hover:bg-gray-50 text-brand-red hover:underline transition-colors">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Safe Church Training
                            </a>
                        </li>
                    </ul>
                </Card>

                <Card>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="text-blue-800 font-semibold mb-2">Need Support?</h4>
                        <p className="text-sm text-blue-700 mb-3">Contact your Presbytery Minister for any questions regarding your formation journey.</p>
                        <a href="mailto:support@uca.org.au" className="text-sm font-medium text-blue-800 underline">support@uca.org.au</a>
                    </div>
                </Card>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default MemberProfile;

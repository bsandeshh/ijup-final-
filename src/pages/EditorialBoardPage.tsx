import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import PageLayout from '../components/Layout/PageLayout';
import { EDITORIAL_MEMBERS } from '../data/mockData';
import { motion } from 'framer-motion';

const EditorialBoardPage: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageLayout title="Editorial Board" titleClassName="text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-950"
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-400/20 to-accent-600/20 rounded-full blur-3xl"
          animate={{
            y: [-10, 10, -10],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-500/20 to-accent-700/20 rounded-full blur-3xl"
          animate={{
            y: [10, -10, 10],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Floating Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto mb-12">
          <motion.p 
            className="text-white/90 text-lg leading-relaxed bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our editorial board consists of leading academics and researchers from around the world, 
            ensuring that the International Journal of Universal Print maintains the highest standards 
            of academic rigor and integrity. Board members oversee the peer review process and 
            contribute to the strategic direction of the journal.
          </motion.p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {EDITORIAL_MEMBERS.map((member) => (
            <motion.div 
              key={member.id}
              variants={item}
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-accent-50 overflow-hidden rounded-l-full flex items-center justify-center">
                  <motion.img 
                    src={member.photoUrl} 
                    alt={member.name} 
                    className="h-full w-full object-cover object-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <motion.span 
                    className="text-sm font-medium text-accent-600 mb-1 block"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {member.role}
                  </motion.span>
                  <motion.h3 
                    className="text-xl font-bold text-accent-700 mb-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-sm mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {member.title} at {member.affiliation}
                  </motion.p>
                  <motion.p 
                    className="text-gray-700 mb-4 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {member.bio}
                  </motion.p>
                  <motion.div 
                    className="flex space-x-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {member.email && (
                      <motion.a 
                        href={`mailto:${member.email}`}
                        className="flex items-center text-sm text-accent-600 hover:text-accent-700 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail size={16} className="mr-1" />
                        Contact
                      </motion.a>
                    )}
                    <motion.button 
                      className="flex items-center text-sm text-accent-600 hover:text-accent-700 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Profile
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-gradient-to-r from-accent-600 to-accent-700 rounded-xl p-8 border border-accent-500/30 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h2 
            className="text-2xl font-serif font-bold text-white mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Join Our Editorial Board
          </motion.h2>
          <motion.p 
            className="text-white/90 mb-6 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            We are always looking for qualified academics and researchers to join our editorial board. 
            If you are interested in contributing to the International Journal of Universal Print, 
            please send your CV and a brief statement of interest to the Editor-in-Chief.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <motion.a 
              href="mailto:bmsdsa@gmail.com" 
              className="inline-flex items-center px-8 py-4 bg-white text-accent-700 rounded-xl font-bold hover:bg-accent-50 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} className="mr-2" />
              Contact the Managing Editor
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Editorial Board Members */}
        <motion.div 
          className="mt-16 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <motion.div 
            className="flex items-center mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: 2,
                ease: "easeInOut"
              }}
            >
              <Mail className="h-8 w-8 text-accent-600 mr-3" />
            </motion.div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">Editorial Board Members</h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Jong Kyu Kim</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Mathematics, Kyungnam University Masan Kyungnam, 631-701, S. Korea</p>
              <p className="text-sm text-accent-600">jongkyuk@kyungnam.ac.kr</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Atanu Manna</h3>
              <p className="text-sm text-gray-700 mb-2">Assistant Professor of Mathematics, Indian Institute of Carpet Technology, Bhadohi, U.P., India</p>
              <p className="text-sm text-accent-600">atanuiitkgp86@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Faik Gursoy</h3>
              <p className="text-sm text-gray-700 mb-2">Dept. of Mathematics, Yildiz Technical University, Esenler, Istanbul, Turkey</p>
              <p className="text-sm text-accent-600">faikgursoy02@hotmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Jadranka Micic</h3>
              <p className="text-sm text-gray-700 mb-2">Faculty of Mechanical Engineering and Naval Architecture, University of Zagreb</p>
              <p className="text-sm text-accent-600">jmicic@fsb.hr</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Kanhaiya Jha</h3>
              <p className="text-sm text-gray-700 mb-2">Dept. of Mathematics, Sciences, School of Science, Kathmandu University, P.O. Box Number 6250, Kathmandu, Nepal</p>
              <p className="text-sm text-accent-600">jhaknh@yahoo.co.in</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Vatan Karakaya</h3>
              <p className="text-sm text-gray-700 mb-2">Dept. of Mathematics, Engineering Yildiz Technical University, Turkey</p>
              <p className="text-sm text-accent-600">vkkaya@yahoo.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Prof. Dr. H. K Pathak</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Mathematics, Ravishankar Shukla University, Raipur C.G. (IND)</p>
              <p className="text-sm text-accent-600">hkpathak05@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Prof. Dr. S. S. Benchalli</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Mathematics, Karnatka University, Dharwad, Karnatka (IND)</p>
              <p className="text-sm text-accent-600">benchalliss@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Prof. Dr. J. N. Salunke</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Mathematics, Swami Ramanand Teerth Marathwada University, Nanded Dist: Nanded, Maharashtra (IND)</p>
              <p className="text-sm text-accent-600">drjnsalunke@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Prof. Dr. Javed Ali</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Mathematics, Aligarh Muslim University, Aligarh, Utter-Pradesh (IND)</p>
              <p className="text-sm text-accent-600">javid@amu.ac.in</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Prof. Dr. B. D. Karande</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Mathematics, Maharashtra Udayagiri Mahavidhyalaya, Udgir, Dist: Latur, Maharashtra (IND)</p>
              <p className="text-sm text-accent-600">bmsdsa@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Mohammad Saeed Khan</h3>
              <p className="text-sm text-gray-700 mb-2">Dept. of Mathematics, and Statistic, College of Science, Sultan Qaboos University, PO Box 36, PCode123, Al-Khod, MUSCAT, Sultanate of Oman</p>
              <p className="text-sm text-accent-600">mohammad@squ.edu.om</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. K. L. Bondar</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Mathematics, N.E.S. College, Nanded, Maharashtra (IND)</p>
              <p className="text-sm text-accent-600">klbondar_75@rediffmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Prof. Dr. V. C. Borkar</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Mathematics, Yeshwant Mahavidhyalaya, Nanded, Dist: Nanded, Maharashtra (IND)</p>
              <p className="text-sm text-accent-600">borkar_vc@yahoo.co.in</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Prof. Dr. R. N. Ingle</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Mathematics, Bahirji Smarak Mahavidhyalaya, Basmatnagar, Dist: Hingoli, Maharashtra (IND)</p>
              <p className="text-sm text-accent-600">ngleraju11@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Nilima Puranik</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Mathematics, Amolachand Mahavidhyalya, Yavatmal Dist: Yavatmal, Maharashtra (IND)</p>
              <p className="text-sm text-accent-600">nilunarayan@yahoo.co.in</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. D. S. Palimkar</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Mathematics, Vasantrao Naik Mahavidhyalaya, Nanded, Dist: Nanded, Maharashtra (IND)</p>
              <p className="text-sm text-accent-600">dspalimkar@rediffmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. V. N. Mishra</h3>
              <p className="text-sm text-gray-700 mb-2">Department Of Mathematics, S. V. National Institute of Technology, Surat (Gujarat), India</p>
              <p className="text-sm text-accent-600">vishnu_narayanmishra@yahoo.co.in</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Zhenxing Wang</h3>
              <p className="text-sm text-gray-700 mb-2">College of Pharmaceutical Sciences, Southwest University, Chongqing-400716 China</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Blasco Morozzo Della Rocca</h3>
              <p className="text-sm text-gray-700 mb-2">University of Rome "Tor Vergata", Via Della Ricerca Scientifica 1, Rome Italy-00133</p>
              <p className="text-sm text-accent-600">b.morozzo@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Kesaraju Seeta Ramchander Rao</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Applied Sciences, Higher College of Technology, PO Box-74, Al-Khuwair, Postal code-133, Muscat; Sultanate of Oman</p>
              <p className="text-sm text-accent-600">raoksr2005@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Prafulla S. Katkar</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Biology, University of Rome "Tor Vergata", Via Della Ricerca Scientifica 1, Rome, Italy-00133</p>
              <p className="text-sm text-accent-600">psl.zeal@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Venn Vutey</h3>
              <p className="text-sm text-gray-700 mb-2">Royal University of Agriculture, Khan Dangkor, Phnom Penh, Post Code-12401, P.O. Box-2696, Cambodia</p>
              <p className="text-sm text-accent-600">vennvutey@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. N. Jagan Mohan Reddy</h3>
              <p className="text-sm text-gray-700 mb-2">PG Dept of Botany, Shri Shivaji College, Kandhar Dist. Nanded (MS)</p>
              <p className="text-sm text-accent-600">nallajaganreddy60@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. R. Onkarappa</h3>
              <p className="text-sm text-gray-700 mb-2">PG Dept. of Studies and Research in Microbiology, Sahyadri Science College, Kuvempu University, Shimoga-577203</p>
              <p className="text-sm text-accent-600">onkarappa.r@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Diksha Khare</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Botany, Govt. PG College, Bhatpara. (CG)</p>
              <p className="text-sm text-accent-600">dr.dikshakhare@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. R. B. Allapure</h3>
              <p className="text-sm text-gray-700 mb-2">Dept. of Botany, Maharashtra Udaygiri Mahavidyalaya, Udgir Dist.Latur (MS)</p>
              <p className="text-sm text-accent-600">allapure@yahoo.co.in</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Sandeep Das</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Biotechnology, Bodoland University, Kokrajhar, Assam</p>
              <p className="text-sm text-accent-600">sandeep_dna2003@yahoo.co.in</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. P. G. Bansod</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Botany, Vidyabharti Mahavidyalaya, Amravati. (MS)</p>
              <p className="text-sm text-accent-600">prafullabansod@rediffmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Prashant Wakte</h3>
              <p className="text-sm text-gray-700 mb-2">PG Department of Microbiology, DSM College, Parbhani. (MS)</p>
              <p className="text-sm text-accent-600">prashantwakte@rediffmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. S. G. Yadav</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Botany, Shivaji Mahavidyalaya, Renapur Dist.Latur (MS)</p>
              <p className="text-sm text-accent-600">dryadavsg@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Deepika Singh</h3>
              <p className="text-sm text-gray-700 mb-2">Department of Pharmaceutical Sciences, Faculty of Health Sciences, Sam Higginbottom Institute of Agriculture, Technology and Sciences-Deemed University, Allahabad- 211007 (UP)</p>
              <p className="text-sm text-accent-600">deepika_singh1888@rediffmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Hemantkumar Thakur</h3>
              <p className="text-sm text-gray-700 mb-2">PG Dept. of Botany, Gokhale Educations Society's, H.P.T. Arts & R.Y.K. Science College, Nashik-422055 (MS)</p>
              <p className="text-sm text-accent-600">hemant13570@rediffmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Walay Tagde</h3>
              <p className="text-sm text-gray-700 mb-2">Dept. of Botany, C. J. Patel College Of Arts, Commerce & Science, Khairlanji Road Tirora, Dist- Gondia (M.S.)</p>
              <p className="text-sm text-accent-600">walaytagde@gmail.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Sameer S. Bhagyawant</h3>
              <p className="text-sm text-gray-700 mb-2">School of Studies in Biotechnology, Jiwaji University, Gwalior-474011 (MP)</p>
              <p className="text-sm text-accent-600">sameerbhagyawant@yahoo.com</p>
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dr. Yogesh A. Ahirrao</h3>
              <p className="text-sm text-gray-700 mb-2">Dept. of Botany, S.S.V.P.S Arts, Commerce And Science College, Shindkheda Dist-Dhule (MS)</p>
              <p className="text-sm text-accent-600">yaabotany@gmail.com</p>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </PageLayout>
  );
};

export default EditorialBoardPage;
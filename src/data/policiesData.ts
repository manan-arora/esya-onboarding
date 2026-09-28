import type { PolicyDoc } from '../types';

export const POLICIES_DATA: PolicyDoc[] = [
  {
    id: 'leave-policy',
    title: 'Esyasoft Leave Policy',
    version: '3.1',
    revisionDate: '19-01-2025',
    preparedBy: 'HRBP',
    approvedBy: 'Sr. Management',
    applicability: 'All on-roll employees under Esyasoft India',
    owner: 'Human Resources (HRBP)',
    fileName: 'Esyasoft_Leave_Policy_v3.1.md',
    whatItAnswers: [
      'How many days of Earned, Sick, Casual, and Menstrual leave am I entitled to?',
      'What are the leave rules during probation and notice period?',
      'How does Compensatory Off (CO) work and what is the validity?',
      'What are the maternity, paternity, and sabbatical leave guidelines?',
      'How do I apply for leave via HRMS?'
    ],
    keyThingsToKnow: [
      'Earned Leave (EL): 18 days/year (accrues 1.5 days/month after 1st month). Max carry forward 12 days/year, max cumulative cap 45 days. Needs 15-day prior approval if taking >=5 consecutive days.',
      'Sick Leave (SL): 6 days/year (0.5 days/month). Can be used during probation and notice period (with medical proof & approval). Prolonged SL requires internal medical review.',
      'Casual Leave (CL): 6 days/year. Max 2 consecutive days at a time. Cannot be used during notice period. Lapses at end of year.',
      'Menstrual Leave: 12 days/year (1 day per month for female employees). Paid, non-accumulative, cannot be carried forward or encashed.',
      'Compensatory Off (CO): Full day for >=8 hrs weekend/holiday work; half day for >=4 hrs. Must be used within 90 days.',
      'Maternity Leave: 26 weeks for up to 2 children (female employees with >=80 days service). Paternity Leave: 7 days within 5 days of child birth (male employees with >=80 days service).',
      'Leave Application: All leaves must be applied and approved via Zoho People HRMS prior to proceeding on leave (or post-resuming for unplanned absences).'
    ],
    contentMarkdown: `# Esyasoft Leave Policy (v3.1)

## Scope
Applies to all on-roll employees under Esyasoft India.

## Summary of Entitlements
- **Earned Leave (EL)**: 18 Days / Year (1.5 days/month). Max carryover 12 days, max accumulated balance 45 days. Encashment at separation basic pay (completed 240 active days).
- **Sick Leave (SL)**: 6 Days / Year (0.5 days/month). Applicable during probation. Medical proof required for extended SL.
- **Casual Leave (CL)**: 6 Days / Year (0.5 days/month). Max 2 days continuously. Cannot be taken during notice period.
- **Menstrual Leave**: 12 Days / Year (1 day/month for female employees). Non-accumulative, paid.
- **Compensatory Off (CO)**: Awarded for approved weekend/holiday work (8+ hrs = 1 day, 4+ hrs = 0.5 day). Valid for 90 days.
- **Maternity Leave (ML)**: 26 weeks paid for female employees completing 80 days of service. 6 weeks for miscarriage/termination.
- **Paternity Leave (PL)**: 7 days paid for male employees completing 80 days of service.
- **Sabbatical Leave**: Up to 6 months unpaid after 180 days of service, requires HR/Management approval.

## Process
All leave must be applied and approved via Zoho People HRMS portal.`
  },
  {
    id: 'domestic-travel-policy',
    title: 'Esyasoft Domestic Travel Policy',
    version: '1.0',
    revisionDate: '11-11-2025',
    preparedBy: 'HRBP',
    approvedBy: 'Finance & HR Team / Management',
    applicability: 'All Esyasoft Employees (Regular, Trainee, Intern, FTC in Zoho)',
    owner: 'Finance & HR Department',
    fileName: 'Domestic Travel Policy.md',
    whatItAnswers: [
      'When is air travel allowed vs rail or road travel?',
      'What are the per diem rates and hotel caps for Category A vs Category B cities?',
      'How do I claim local conveyance (car / bike per km rates)?',
      'What is the step-by-step process for booking travel and submitting expense reports in Zoho Expense?',
      'What expenses are non-reimbursable?'
    ],
    keyThingsToKnow: [
      'Air Travel: Permitted only if travel time > 6 hours by road/rail. Must be Economy class booked via Zoho Expense trip request at least 4 working days in advance.',
      'Road / Rail Travel: Allowed if travel time <= 6 hours. Train class 1A/EC for Grades 11-E14, 2A/3A/CC for Grades E10-E1.',
      'Personal Vehicle Reimbursement: Rs 15 / km for cars and Rs 10 / km for two-wheelers for business travel.',
      'City Classification: Category A (Delhi, Mumbai, Kolkata, Bengaluru, Chennai, Hyderabad, Ahmedabad); Category B (All other cities).',
      'Hotel Limits (Company Booking): Cat A: Rs 7,000 (Gr 11-E14), Rs 5,000 (Gr E10-E6), Rs 4,000 (Gr E5-E1); Cat B: Rs 6,000 / Rs 4,000 / Rs 3,000 (+ GST extra).',
      'Per Diem Rates (No bills required): Cat A: Rs 2,000 / Rs 1,500 / Rs 1,200; Cat B: Rs 1,800 / Rs 1,300 / Rs 1,000 per day. Entitlement based on duration (<6 hrs = 0%, 6-12 hrs = 50%, >12 hrs = 100%).',
      'Reimbursement Timeline: Submit expense report in Zoho Expense within 30 working days of return. Money utilization report for advances within 15 days.'
    ],
    contentMarkdown: `# Esyasoft Domestic Travel Policy (v1.0)

## Scope
Applies to all employees undertaking official business travel outside their stationary working location.

## Key Entitlements
- **Air Travel**: Allowed only if journey time > 6 hours by rail/road. Economy class only.
- **Local Conveyance**: Personal Car @ Rs.15/km, Two-wheeler @ Rs.10/km. Autorickshaw/Ola/Uber at actuals with receipts.
- **Hotel Caps (Cat A Cities)**: Gr 11-E14: Rs 7,000/night; Gr E10-E6: Rs 5,000/night; Gr E5-E1: Rs 4,000/night.
- **Per Diem**: Cat A Cities: Rs 2,000 / Rs 1,500 / Rs 1,200 per day depending on grade. (<6h=0%, 6-12h=50%, >12h=100%). No bills required for per diem.

## Booking & Reimbursement Workflow
1. Submit Trip Request in Zoho Expense at least 4 working days prior.
2. Approval by Reporting Manager -> Travel Desk books tickets & hotels.
3. Submit expense report via Zoho Expense within 30 days of trip completion.`
  },
  {
    id: 'pms-policy',
    title: 'Performance Management System (PMS) Policy',
    version: '1.0',
    revisionDate: '04-02-2026',
    preparedBy: 'Human Resource',
    approvedBy: 'Senior Management',
    applicability: 'All full-time employees (including probationers), except those on notice period',
    owner: 'Human Resources (HRBP)',
    fileName: 'PMS (Performance Management System) Policy.md',
    whatItAnswers: [
      'What is the annual appraisal cycle timeline at Esyasoft?',
      'What is the 5-point rating scale and what does each rating mean?',
      'Who is eligible for annual salary increments and promotions?',
      'How does goal setting work for existing employees and new hires?'
    ],
    keyThingsToKnow: [
      'Appraisal Cycle: April to March annually. Conducted digitally in the HRMS portal.',
      'Goal Setting: Completed before end of May for existing employees. For new hires, assigned within 60 days of start date.',
      'Eligibility for Increment: Employees who joined on or before 30th September. Those joining Oct 1 - Mar 31 are reviewed in the subsequent cycle.',
      '5-Point Rating Scale: 5 = Outstanding, 4 = Exceeds Expectation, 3 = Meets Expectation, 2 = Below Expectation, 1 = Needs Improvement.',
      'Increment & Promotion Eligibility: Ratings 5, 4, and 3 are eligible. Rating 2 is not eligible. Rating 1 triggers a Performance Improvement Plan (PIP).',
      'Timeline Stages: Goal Setting (May) -> Self-Appraisal (by Feb end) -> Manager Review (Mar 1-15) -> Management Calibration (Mar 16-31) -> Final Approval (Apr 1-7) -> Communication & Letters (Apr 7-15).'
    ],
    contentMarkdown: `# Esyasoft PMS Policy (v1.0)

## Performance Cycle: April to March
- **Goal Setting**: Assigned within 60 days of joining for new hires; by end of May for existing staff.
- **Eligibility**: Employees joining on or before September 30th are eligible for current cycle revision.

## Rating Scale
- **5 - Outstanding**: Consistently delivers beyond exceptional results.
- **4 - Exceeds Expectation**: Often performs beyond expected standards.
- **3 - Meets Expectation**: Consistently and reliably meets all expectations.
- **2 - Below Expectation**: Meets expectations occasionally; no increment.
- **1 - Needs Improvement**: Does not meet standard; initiates PIP.`
  },
  {
    id: 'pip-policy',
    title: 'Performance Improvement Plan (PIP) Policy',
    version: '1.0',
    revisionDate: '04-02-2026',
    preparedBy: 'Human Resource',
    approvedBy: 'Senior Management',
    applicability: 'Confirmed full-time employees identified as underperforming. (Probationers & notice period excluded)',
    owner: 'Human Resources (HRBP)',
    fileName: 'PIP (Performance Improvement Plan) Policy.md',
    whatItAnswers: [
      'What triggers a Performance Improvement Plan?',
      'What is the duration and review frequency of a PIP?',
      'How is performance scored during PIP check-ins?',
      'What are the possible outcomes at the end of a PIP?'
    ],
    keyThingsToKnow: [
      'Purpose: Developmental and structured support to help underperforming employees meet role expectations.',
      'PIP Triggers: KPI/KRA failures over review cycles, skill/capability gaps, uncorrected work discipline/conduct, stakeholder complaints, or PMS rating 1.',
      'Duration & Review Frequency: Critical gap: 1 Month (Weekly reviews); Developmental gap: 2 Months (Bi-weekly reviews). Can be extended up to 1 additional month with HR approval.',
      'Scoring Scale: 3-point rating: Good, Satisfactory, Unsatisfactory. Consecutive unsatisfactory ratings may lead to resignation/termination.',
      'Outcomes: Successful (Return to normal cycle, eligible for increments) / Partial Progress (Short extension) / Unsuccessful (Separation in line with policy).',
      'Platform: All PIP documentation, goals, and review scores must be tracked in Zoho People.'
    ],
    contentMarkdown: `# Esyasoft PIP Policy (v1.0)

## Duration & Review Frequency
- **1 Month (Default)**: Critical performance gap — Weekly reviews.
- **2 Months**: Developmental improvement — Bi-weekly reviews.

## Review Scoring
Scored as: **Good**, **Satisfactory**, or **Unsatisfactory**.
Consecutive unsatisfactory scores may lead to separation. Tracked transparently in Zoho People.`
  },
  {
    id: 'posh-policy',
    title: 'Prevention of Sexual Harassment (POSH) Policy',
    version: '3.0',
    revisionDate: '2025',
    preparedBy: 'Human Resource & Legal',
    approvedBy: 'Senior Management',
    applicability: 'All employees, contractors, trainees, visitors, across physical and virtual workplaces',
    owner: 'Internal Complaints Committee (ICC)',
    fileName: 'POSH.md',
    whatItAnswers: [
      'What constitutes sexual harassment under Esyasoft policy and POSH Act 2013?',
      'Does POSH cover digital communications (Teams, WhatsApp, email, social media)?',
      'How do I file a complaint with the Internal Complaints Committee (ICC)?',
      'What are the inquiry timelines, conciliation rules, and interim relief options?',
      'What actions are taken in case of substantiated complaints or malicious false claims?'
    ],
    keyThingsToKnow: [
      'Scope: Covers all physical workplaces, company travel, events, and digital spaces (MS Teams, WhatsApp, Zoom, email, social media).',
      'Definition: Any unwelcome sexually determined behavior (physical contact, sexual favors, sexually coloured remarks, showing pornography, persistent stalking/messaging, sexually suggestive comments).',
      'Internal Complaints Committee (ICC): Comprises a female Senior Presiding Officer, at least 2 employee members, and 1 independent external member with legal/NGO expertise. At least 50% members are women.',
      'Complaint Filing: Must be submitted in writing to any ICC member within 3 months of the incident/last incident.',
      'Inquiry Timeline: Formal inquiry initiated within 1 week, completed within 90 days. ICC report submitted to employer within 10 days of completion.',
      'Interim Relief: Complainant may request transfer, shift change, or up to 3 months paid leave during inquiry.',
      'Consequences: Range from written warning, apology, withholding promotion/increment, to termination of service.'
    ],
    contentMarkdown: `# Esyasoft POSH Policy (v3.0)

## Zero Tolerance Commitment
Esyasoft is committed to a safe, respectful workplace free from sexual harassment, enforcing POSH Act 2013 across physical and digital workplaces.

## Filing a Complaint
Submit written complaint to the Internal Complaints Committee (ICC) within 3 months of incident.
- Inquiry duration: Maximum 90 days.
- Confidentiality: Strictly preserved.`
  },
  {
    id: 'zoho-people-handbook',
    title: 'Zoho People 5.0 Employee Handbook',
    version: '5.0',
    revisionDate: '2025',
    preparedBy: 'Zoho / Esyasoft HR',
    approvedBy: 'Group HR Head',
    applicability: 'All Esyasoft Employees',
    owner: 'HR Systems / HR Operations',
    fileName: 'Zoho People Handbook.md',
    whatItAnswers: [
      'What HR functions can I manage self-service in Zoho People?',
      'How do I mark attendance, request regularization, or check in/out?',
      'Where do I view my leave balance, apply for leave, or view holiday calendar?',
      'How do I log timesheets, view KRAs, and access performance self-appraisal?'
    ],
    keyThingsToKnow: [
      'Self-Service HRMS: Zoho People 5.0 is the core portal and mobile app for employee self-service.',
      'Key Modules: Profile & Preferences, Leave Service, Attendance (Check-in/out, regularization, on-duty), Timesheet Service, Performance Service (KRAs, goals, peer feedback, self-review), Compensation Service (Salary & revision letters), LMS (Courses & learning plans).',
      'Organization Directory: View company announcements, employee tree, department directory, and birthday list.'
    ],
    contentMarkdown: `# Zoho People 5.0 Employee Handbook

Cloud-based HRMS platform used for all daily HR tasks:
- **Leave & Attendance**: Apply leave, mark attendance check-in/out, request regularization.
- **Performance**: View KRAs, submit goals, peer 360 feedback, self-appraisals.
- **Compensation & LMS**: Access payslips, revision letters, enroll in training courses.`
  },
  {
    id: 'employee-referral-policy',
    title: 'Employee Referral Bonus Policy',
    version: '1.0',
    revisionDate: '03-06-2025',
    preparedBy: 'HRBP / Talent Acquisition',
    approvedBy: 'Group HR Head',
    applicability: 'All full-time employees in India (excluding Leadership, Hiring Managers for role, & TA/HR team)',
    owner: 'Talent Acquisition Team',
    fileName: 'Employee Referral Policy.md',
    whatItAnswers: [
      'What is the referral bonus amount for a successful hire?',
      'When is the referral bonus paid out?',
      'How do I submit a referral through Zoho Recruit?',
      'Who is excluded from receiving a referral bonus?'
    ],
    keyThingsToKnow: [
      'Referral Bonus Amount: ₹20,000 (subject to applicable taxes) per successful hire for eligible positions posted on the Employee Referral Portal.',
      'Payout Timeline: Disbursed 90 days after candidate\'s Date of Joining (DOJ), provided onboarding and background verification (BGV) are completed.',
      'Submission Channel: Must be submitted exclusively through Zoho Recruit Employee Referral Portal prior to candidate application.',
      'Exclusions: Leadership team, interviewing/hiring managers for the role, HR/Recruitment team, rehired employees (within 1 yr of exit).'
    ],
    contentMarkdown: `# Employee Referral Bonus Policy (v1.0)

- **Bonus Amount**: ₹20,000 per successful hire for eligible posted roles.
- **Payout Timeline**: 90 days post-joining after successful BGV.
- **How to Refer**: Log into Zoho Recruit -> Employee Referral -> Select position -> Upload resume.`
  },
  {
    id: 'training-certification-policy',
    title: 'Training & Certification Reimbursement Policy',
    version: '1.0',
    revisionDate: '14-05-2025',
    preparedBy: 'Head – Learning & Development',
    approvedBy: 'Group HR Head',
    applicability: 'Confirmed permanent employees and direct contractors as part of Joint Ventures',
    owner: 'Talent Development Team',
    fileName: 'Esyasoft Training and Certification Reimbursement Policy.md',
    whatItAnswers: [
      'What training and certifications are eligible for company reimbursement?',
      'What prior approvals are required before registering for a course?',
      'What is the service agreement / retention recovery clause for costs > ₹10,000?',
      'How do I claim reimbursement after completing the certification?'
    ],
    keyThingsToKnow: [
      'Eligibility: Must be confirmed employee, not on notice period, and certification must be directly relevant to role/career path with ROI justification.',
      'Prior Approval Required: Must obtain written email approval from Reporting Manager, Business Unit Head, and Head - Talent Development BEFORE enrolling.',
      'Retention Matrix (For costs > ₹10,000): Exit <6 months (100% recovery), 6-9 months (75%), 9-12 months (50%), 12-24 months (25%), >24 months (Nil).',
      'Reimbursement Process: Submit invoice receipt and completion certificate via Zoho Expense ticket after passing.',
      'Retake Fees: Exam retake fees for failed attempts are NOT reimbursable.'
    ],
    contentMarkdown: `# Training & Certification Reimbursement Policy

- **Prior Approval**: Requires approval from Manager, BU Head, and Head of Talent Development.
- **Retention Bond (Costs > ₹10k)**: Service commitment matrix up to 24 months (100% recovery if leaving <6 months, tapering down to 0% after 24 months).`
  },
  {
    id: 'holiday-calendar-2026',
    title: 'Esyasoft Holiday Calendar 2026',
    version: '2026',
    revisionDate: '21-11-2024',
    preparedBy: 'Human Resource',
    approvedBy: 'Senior Management',
    applicability: 'All Esyasoft India Employees',
    owner: 'Human Resources',
    fileName: 'Holiday Calendar 2026.md',
    whatItAnswers: [
      'What are the National and Mandatory holidays in 2026?',
      'How many Optional holidays can I select in a calendar year?',
      'What is the list of state and festival holidays for 2026?'
    ],
    keyThingsToKnow: [
      'Holiday Types: National (Fixed for all), Mandatory (Fixed for all), State (Specific to state location), Optional (Choice of any 4 per year).',
      'National Holidays 2026: Republic Day (Jan 26, Mon), May Day (May 01, Fri), Independence Day (Aug 15, Sat), Gandhi Jayanti (Oct 02, Fri).',
      'Mandatory Holidays 2026: Eid-ul-Fitr (Mar 21, Sat), Good Friday (Apr 03, Fri), Bakrid (May 28, Thu), Ganesh Chaturthi (Sep 14, Mon), Ayudha Pooja/Dussehra (Oct 20, Tue), Diwali (Nov 08, Sun), Christmas (Dec 25, Fri).',
      'Optional Holidays: Employees may choose any 4 optional holidays from the 25+ listed optional festival days in Zoho People.'
    ],
    contentMarkdown: `# Holiday Calendar 2026

- **National Holidays**: Jan 26 (Republic Day), May 1 (May Day), Aug 15 (Independence Day), Oct 2 (Gandhi Jayanti).
- **Mandatory Holidays**: Mar 21 (Ramzan/Eid), Apr 3 (Good Friday), May 28 (Bakrid), Sep 14 (Ganesh Chaturthi), Oct 20 (Dussehra), Nov 8 (Diwali), Dec 25 (Christmas).
- **Optional Holidays**: Choose any 4 optional holidays during the year in Zoho People.`
  }
];

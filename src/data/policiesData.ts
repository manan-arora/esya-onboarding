import type { PolicyDoc } from '../types';

export const POLICIES_DATA: PolicyDoc[] = [
  {
    id: 'leave-policy',
    title: 'Esyasoft Leave Policy',
    version: '3.1',
    revisionDate: '19-01-2025',
    preparedBy: 'HRBP',
    approvedBy: 'Sr. Management',
    applicability: 'All on-roll employees under Esyasoft India (Excludes interns, retainers & external contract workers unless specified in contract)',
    owner: 'Human Resources (HRBP)',
    fileName: 'Esyasoft_Leave_Policy_v3.1.md',
    whatItAnswers: [
      'How many days of Earned, Sick, Casual, and Menstrual leave am I entitled to?',
      'What are the leave rules during probation and notice period?',
      'How does Compensatory Off (CO) work and what is its 90-day validity?',
      'What are the maternity, paternity, and sabbatical leave guidelines?',
      'What happens to my unused leave balance at year-end or upon separation?'
    ],
    keyThingsToKnow: [
      'Earned Leave (EL): 18 days/year (accrues 1.5 days/month after 1st month). Max carry-forward 12 days/year, max cumulative balance cap 45 days. 5+ consecutive days requires 15 days prior notice. Encashment at basic salary post 240 active working days.',
      'Sick Leave (SL): 6 days/year (0.5 days/month). Applicable during probation & notice period. Medical certificate required for 3+ consecutive days.',
      'Casual Leave (CL): 6 days/year (0.5 days/month). Max 2 consecutive days at a time. Lapses at year-end; cannot be taken during notice period.',
      'Menstrual Leave: 12 days/year (1 day/month for female employees). Paid, non-accumulative, cannot be encashed or carried forward.',
      'Compensatory Off (CO): 1 day for >=8 hrs weekend/holiday work; 0.5 day for >=4 hrs. Must be used within 90 days of earning.',
      'Maternity Leave: 26 weeks paid for female employees completing 80 days of service in preceding 12 months (up to 2 children). 6 weeks for miscarriage.',
      'Paternity Leave: 7 days paid for male employees completing 80 days of service, to be taken within 5 days of child birth.',
      'Sabbatical Leave: Up to 6 months unpaid after 180 days of service, subject to HR & Management approval.',
      'Loss of Pay (LOP): Absence without prior sanction treated as LOP. >3 consecutive days unapproved absence initiates disciplinary action.',
      'Application Route: Submit via Zoho People HRMS prior to proceeding on leave (or within 24h post-resuming for unplanned absences).'
    ],
    contentMarkdown: `# Esyasoft Leave Policy (v3.1)

## 1. Overview & Applicability
This policy governs leave entitlements, eligibility, accruals, application processes, and encashment rules for all on-roll employees under Esyasoft India. 
*(Non-applicable for interns, external contractors, or retainers unless explicitly stated in their contract).*

---

## 2. Summary of Leave Entitlements

| Leave Type | Annual Entitlement | Accrual / Rate | Max Carry Forward | Max Cumulative Cap | Applicable in Probation? | Applicable in Notice Period? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Earned Leave (EL)** | 18 Days | 1.5 days / month | 12 Days / Year | 45 Days | No (Accrues post 1st mo, usable post confirmation) | Subject to HR approval |
| **Sick Leave (SL)** | 6 Days | 0.5 days / month | Nil (Lapses) | 6 Days | Yes | Yes (With medical proof) |
| **Casual Leave (CL)** | 6 Days | 0.5 days / month | Nil (Lapses) | 6 Days | Yes | No |
| **Menstrual Leave** | 12 Days | 1 day / month | Nil (Lapses) | N/A | Yes | Yes |
| **Compensatory Off (CO)**| Earned basis | 1 day (≥8h) / 0.5 day (≥4h)| Valid 90 Days | N/A | Yes | Yes |
| **Maternity Leave (ML)**| 26 Weeks | Lump sum | N/A | N/A | Yes (Requires 80d service) | N/A |
| **Paternity Leave (PL)**| 7 Days | Lump sum | N/A | N/A | Yes (Requires 80d service) | N/A |
| **Sabbatical Leave** | Up to 6 Months | Unpaid | N/A | N/A | No (Requires 180d service) | No |

---

## 3. Detailed Leave Guidelines

### 3.1 Earned Leave (EL)
- **Accrual**: Accrues at the rate of 1.5 days per completed month starting from the second month of employment.
- **Notice & Approval**: Taking 5 or more consecutive days of EL requires at least **15 calendar days advance written approval** from your Reporting Manager and HR.
- **Carry Forward & Cumulative Cap**: Up to **12 unused EL days** can be carried forward into the next calendar year. The total accumulated EL balance is capped at **45 days**. Any excess balance beyond 45 days automatically lapses.
- **Encashment**: EL encashment is permitted only upon separation (resignation/retirement) based on the employee's last drawn **Basic Salary**, provided the employee has completed at least **240 active working days** at Esyasoft.

### 3.2 Sick Leave (SL)
- **Accrual**: 0.5 days per month (total 6 days per calendar year). Unused SL lapses on December 31st annually.
- **Medical Certificate**: A formal medical certificate from a registered medical practitioner is mandatory for any SL duration of **3 or more consecutive days**.
- **Notice Period & Probation**: SL can be availed during probation and notice periods when backed by valid medical documentation.
- **Prolonged Illness**: Extended SL beyond accrued limits requires evaluation and internal review by HR.

### 3.3 Casual Leave (CL)
- **Accrual**: 0.5 days per month (total 6 days per calendar year). Unused CL lapses at year-end.
- **Usage Limit**: Maximum of **2 consecutive CL days** can be taken at one time. CL cannot be combined with EL.
- **Notice Period**: Casual Leave **cannot be availed during notice period**.

### 3.4 Menstrual Leave
- **Entitlement**: 1 paid day per calendar month (total 12 days per year) for all female employees.
- **Conditions**: Non-accumulative, paid, cannot be carried forward, encashed, or combined into multi-day blocks.

### 3.5 Compensatory Off (CO)
- **Eligibility**: Granted when an employee works on a scheduled weekly off or mandatory company holiday with prior written manager authorization.
- **Calculation**: 
  - **Full Day CO**: 8 or more working hours.
  - **Half Day CO**: Between 4 and 8 working hours.
- **Validity**: Must be availed within **90 calendar days** from the date it was earned, after which it automatically lapses.

### 3.6 Maternity & Paternity Leave
- **Maternity Leave**: 26 weeks paid leave for female employees completing at least 80 days of service in the preceding 12 months (for up to 2 surviving children). 6 weeks paid leave in case of miscarriage or medical termination of pregnancy.
- **Paternity Leave**: 7 consecutive calendar days paid leave for male employees completing 80 days of service, to be availed within **5 days of child birth**.

### 3.7 Sabbatical Leave
- **Eligibility**: Employees completing at least 180 days of continuous service may apply for unpaid Sabbatical Leave up to **6 months** for higher education, health recovery, or urgent personal commitments, subject to Business Head and HR approval.

### 3.8 Unapproved Absence & Loss of Pay (LOP)
- Any leave taken without prior approval via Zoho People (or post-facto submission within 24 hours of returning for emergencies) is categorized as **Loss of Pay (LOP)**.
- Absence exceeding **3 consecutive working days** without notice or approval constitutes a breach of discipline and initiates formal disciplinary proceedings under company rules.

---

## 4. How to Apply
1. Log into **Zoho People HRMS** (https://people.zoho.com).
2. Navigate to **Time Off / Leave → Apply Leave**.
3. Select the appropriate leave type and date range, attach required documents (e.g., medical certificates for SL ≥ 3 days), and submit.
4. Ensure your Reporting Manager approves the request prior to commencing leave.

> **Official Source Precedence**: This policy summary provides key operational guidance. The official policy document (*Leave Policy v3.1*) maintained in Zoho People takes precedence.`
  },
  {
    id: 'domestic-travel-policy',
    title: 'Esyasoft Domestic Travel Policy',
    version: '1.0',
    revisionDate: '11-11-2025',
    preparedBy: 'HRBP',
    approvedBy: 'Finance & HR Department / Management',
    applicability: 'All Esyasoft Employees (Regular, Trainee, Intern, FTC listed in Zoho) undertaking business travel',
    owner: 'Finance & HR Department',
    fileName: 'Domestic_Travel_Policy_v1.0.md',
    whatItAnswers: [
      'When is air travel permitted vs rail or road travel?',
      'What are the per diem rates and hotel accommodation caps for Category A vs Category B cities?',
      'How do I claim personal vehicle conveyance (per-km rates for car/two-wheeler)?',
      'What is the step-by-step process for booking travel and submitting expense claims in Zoho Expense?',
      'What expenses are non-reimbursable and what are the submission deadlines?'
    ],
    keyThingsToKnow: [
      'Air Travel: Permitted ONLY if travel time exceeds 6 hours by road/rail. Economy class only. Must book via Zoho Expense trip request at least 4 working days in advance.',
      'Rail / Road Travel: Allowed when journey time is <= 6 hours. Train class: 1A/EC for Grades 11-E14, 2A/3A/CC for Grades E10-E1.',
      'Personal Vehicle Rates: ₹15 / km for Cars, ₹10 / km for Two-wheelers. Cabs (Uber/Ola/Autorickshaw) at actuals with valid receipts.',
      'City Categorization: Category A (Delhi NCR, Mumbai, Kolkata, Bengaluru, Chennai, Hyderabad, Ahmedabad); Category B (All other Indian cities).',
      'Hotel Caps (Company Booked): Cat A: Gr 11-E14 ₹7,000/night, Gr E10-E6 ₹5,000/night, Gr E5-E1 ₹4,000/night; Cat B: Gr 11-E14 ₹6,000/night, Gr E10-E6 ₹4,000/night, Gr E5-E1 ₹3,000/night (+ GST extra).',
      'Per Diem Rates (No bills required): Cat A: ₹2,000 (Gr 11-E14), ₹1,500 (Gr E10-E6), ₹1,200 (Gr E5-E1); Cat B: ₹1,800 / ₹1,300 / ₹1,000 per day. Duration slab: <6 hrs = 0%, 6-12 hrs = 50%, >12 hrs = 100%.',
      'Laundry Allowance: Reimbursable for official travel exceeding 4 consecutive days.',
      'Submission Deadlines: Expense report must be submitted in Zoho Expense within 30 working days of return. Travel advance settlement within 15 days of office return.'
    ],
    contentMarkdown: `# Esyasoft Domestic Travel Policy (v1.0)

## 1. Purpose & Scope
This policy governs official domestic business travel for all Esyasoft employees outside their stationary work location. It establishes entitlement tiers, booking protocols, per diem allowances, hotel limits, and expense reimbursement workflows.

---

## 2. Mode of Travel & Eligibility Rules

### 2.1 Air Travel Rules
- Air travel is permitted **only if the travel duration exceeds 6 hours** by rail or road.
- All flight bookings must be **Economy Class** booked through the company Travel Desk via a **Zoho Expense Trip Request** raised at least **4 working days in advance**.
- Flight tickets booked independently without prior written approval will not be reimbursed.

### 2.2 Rail & Road Travel
- Travel time ≤ 6 hours must be undertaken by train or road transport.
- **Train Entitlement Tiers**:
  - **Grades 11 – E14**: AC First Class (1A) / Executive Class (EC).
  - **Grades E10 – E1**: AC 2-Tier (2A) / AC 3-Tier (3A) / AC Chair Car (CC).

### 2.3 Personal Vehicle & Local Conveyance
- **Personal Car Mileage**: **₹15 per km**.
- **Personal Two-Wheeler Mileage**: **₹10 per km**.
- **Auto / App Cabs (Uber/Ola)**: Reimbursable at actuals against valid digital/physical receipts.

---

## 3. City Classification & Accommodation Caps

### City Categorization
- **Category A Cities**: Delhi NCR, Mumbai, Kolkata, Bengaluru, Chennai, Hyderabad, Ahmedabad.
- **Category B Cities**: All other Indian cities and towns.

### Hotel Accommodation Caps (Per Night, Exclusive of GST)

| Employee Grade | Category A City Cap | Category B City Cap |
| :--- | :--- | :--- |
| **Grades 11 – E14** | ₹7,000 / night | ₹6,000 / night |
| **Grades E10 – E6** | ₹5,000 / night | ₹4,000 / night |
| **Grades E5 – E1** | ₹4,000 / night | ₹3,000 / night |

*Note: Hotel bookings should be routed via the Admin Travel Desk. If company guest houses are available, they take precedence over hotel stays.*

---

## 4. Daily Allowance / Per Diem (No Bills Required)

Per diem covers daily meals, incidental expenses, and local out-of-pocket costs during official trips.

### Daily Per Diem Rates

| Employee Grade | Category A Cities | Category B Cities |
| :--- | :--- | :--- |
| **Grades 11 – E14** | ₹2,000 / day | ₹1,800 / day |
| **Grades E10 – E6** | ₹1,500 / day | ₹1,300 / day |
| **Grades E5 – E1** | ₹1,200 / day | ₹1,000 / day |

### Duration Pro-Rata Slabs
- **Absence < 6 Hours**: 0% (No per diem).
- **Absence 6 to 12 Hours**: 50% of applicable daily rate.
- **Absence > 12 Hours**: 100% of applicable daily rate.

---

## 5. Additional Operational Rules

### 5.1 Laundry Expenses
Laundry charges are reimbursable at actuals only when official travel extends beyond **4 consecutive days**.

### 5.2 Non-Reimbursable Expenses
The following items are strictly non-reimbursable:
- Personal mini-bar consumption, room service alcohol, or tobacco products.
- Traffic fines, parking tickets, or vehicle maintenance fees during personal mileage use.
- Airline seat selection fees or lounge access unless pre-approved for business needs.
- Expenses incurred by accompanying family members or non-employees.

### 5.3 Expense Claim Timelines
- Expense reports must be submitted via **Zoho Expense within 30 working days** of return from travel.
- If a **Travel Advance** was drawn, a complete utilization report and remaining fund return must be completed within **15 calendar days** of office return.

---

## 6. Travel Workflow in Zoho Expense
1. Open **Zoho Expense** (https://expense.zoho.com).
2. Click **Trip Requests → Create New Trip** at least 4 working days before travel.
3. Obtain Reporting Manager and Travel Desk approvals.
4. Upon trip completion, create an **Expense Report**, attach original GST invoices/receipts, link the approved Trip Request, and submit for Finance audit.

> **Official Source Precedence**: This summary provides operational guidance. The official *Domestic Travel Policy v1.0* in Zoho Expense takes precedence.`
  },
  {
    id: 'pms-policy',
    title: 'Performance Management System (PMS) Policy',
    version: '1.0',
    revisionDate: '04-02-2026',
    preparedBy: 'Human Resource',
    approvedBy: 'Senior Management',
    applicability: 'All full-time employees (including probationers), except those on active notice period',
    owner: 'Human Resources (HRBP)',
    fileName: 'PMS_Policy_v1.0.md',
    whatItAnswers: [
      'What is the annual PMS appraisal cycle timeline at Esyasoft?',
      'What is the 5-point rating scale and what does each rating mean?',
      'Who is eligible for annual salary increments and promotions?',
      'How does goal setting work for existing employees vs new hires?',
      'What happens if an employee receives a Rating 1 or Rating 2?'
    ],
    keyThingsToKnow: [
      'Appraisal Cycle: April 1st to March 31st annually. Managed digitally via Zoho People HRMS.',
      'Goal Setting: Finalized by end of May for existing employees. Assigned within 60 days of joining for new hires.',
      'Increment Eligibility: Employees joining on or before 30th September of the performance year are eligible for current cycle revision. Joining Oct 1 - Mar 31 pushes eligibility to the subsequent cycle.',
      '5-Point Rating Scale: 5 = Outstanding, 4 = Exceeds Expectation, 3 = Meets Expectation, 2 = Below Expectation, 1 = Needs Improvement.',
      'Consequences: Ratings 5, 4, 3 are eligible for increments & promotions. Rating 2 is NOT eligible for increment. Rating 1 triggers a formal Performance Improvement Plan (PIP).',
      'Annual Stages: Goal Setting (May) → Mid-Year Review (Oct) → Self-Appraisal (Feb) → Manager Review (Mar 1-15) → Calibration (Mar 16-31) → Approvals & Letters (Apr 1-15).'
    ],
    contentMarkdown: `# Performance Management System (PMS) Policy (v1.0)

## 1. Overview & Annual Performance Cycle
The Performance Management System at Esyasoft evaluates individual achievements, competencies, and organizational contributions over an annual evaluation cycle running from **April 1st to March 31st**.

---

## 2. Annual PMS Timeline & Stages

| Stage | Activity Period | Key Action / Responsibilities |
| :--- | :--- | :--- |
| **1. Goal Setting** | April – May (By May 31st) | KRAs/KPIs agreed upon between Manager and Employee in Zoho People. *(New hires assigned within 60 days of DOJ)*. |
| **2. Mid-Year Check-in** | October | Informal performance review and goal progress check. |
| **3. Self-Appraisal** | February (By Feb 28th) | Employee submits self-appraisal form, accomplishments, and self-ratings in Zoho People. |
| **4. Manager Review** | March 1st – March 15th | Reporting Manager conducts evaluation discussion and submits ratings/feedback. |
| **5. Calibration** | March 16th – March 31st | Management & HR calibration committee normalizes ratings across departments. |
| **6. Communication** | April 1st – April 15th | Final performance ratings communicated; revision/promotion letters issued. |

---

## 3. 5-Point Performance Rating Scale

| Rating | Definition | Performance Standards & Behaviors |
| :--- | :--- | :--- |
| **5 – Outstanding** | Exceptional Performance | Consistently exceeds all KRAs/KPIs. Demonstrates extraordinary initiative, leadership, and high business impact. |
| **4 – Exceeds Expectation** | High Performance | Regularly delivers beyond agreed role standards. Strong technical proficiency and reliable execution. |
| **3 – Meets Expectation** | Solid Performance | Consistently meets all role requirements, targets, and expected competencies. |
| **2 – Below Expectation** | Needs Alignment | Partially meets targets. Occasional performance gaps; **Not eligible for salary increment**. |
| **1 – Needs Improvement** | Critical Underperformance | Fails to meet core KRAs. Triggers immediate initiation of a formal **Performance Improvement Plan (PIP)**. |

---

## 4. Eligibility Criteria for Increment & Promotion

### 4.1 Joining Cut-Off Date
- **Eligible**: Employees joining on or before **September 30th** of the ongoing financial year are eligible for annual performance appraisal, salary revision, and promotion consideration.
- **Ineligible**: Employees joining between **October 1st and March 31st** will participate in goal setting but their first formal salary revision will take place in the subsequent annual cycle.

### 4.2 Performance Rating Eligibility
- **Ratings 5, 4, and 3**: Eligible for annual merit salary increments and promotion consideration.
- **Rating 2**: Ineligible for salary increment; manager counselling provided.
- **Rating 1**: Ineligible for salary increment; mandatory enrolment in PIP.

---

## 5. Zoho People Workflow
All PMS stages (Goal Setting, Mid-Year Check-in, Self-Appraisal, Manager Review, 360 Feedback) are conducted digitally within **Zoho People → Performance**.

> **Official Source Precedence**: The official *PMS Policy v1.0* in Zoho People governs all appraisal processes.`
  },
  {
    id: 'pip-policy',
    title: 'Performance Improvement Plan (PIP) Policy',
    version: '1.0',
    revisionDate: '04-02-2026',
    preparedBy: 'Human Resource',
    approvedBy: 'Senior Management',
    applicability: 'Confirmed full-time employees identified as underperforming (Probationers & employees on notice period excluded)',
    owner: 'Human Resources (HRBP)',
    fileName: 'PIP_Policy_v1.0.md',
    whatItAnswers: [
      'What triggers a Performance Improvement Plan (PIP)?',
      'What is the duration and review frequency of a PIP?',
      'How is performance scored during PIP check-in reviews?',
      'What are the possible outcomes at the end of a PIP?',
      'Is PIP documentation kept confidential and tracked in Zoho People?'
    ],
    keyThingsToKnow: [
      'Purpose: Structured developmental support program designed to help underperforming confirmed employees align with role expectations.',
      'Triggers: Failure to meet agreed KPIs/KRAs/deadlines over cycles, skill/capability gaps, conduct issues affecting performance, stakeholder complaints, or receiving Rating 1 in annual PMS.',
      'Duration & Review Frequency: Critical Gap (Default) = 1 Month (Weekly reviews); Developmental Gap = 2 Months (Bi-weekly reviews). Can extend by max 1 month with HR approval.',
      '3-Point Review Scale: Good, Satisfactory, Unsatisfactory.',
      'Critical Failure Rule: Consecutive "Unsatisfactory" review ratings may lead to advice to resign or initiation of employment termination.',
      'Outcomes: Successful Completion (return to normal cycle, eligible for increments) / Partial Progress (short extension with HR approval) / Unsuccessful Completion (separation per company policy).',
      'Confidentiality: Shared strictly between Employee, Reporting Manager, HR, and Authorized Leadership. Documented in Zoho People.'
    ],
    contentMarkdown: `# Performance Improvement Plan (PIP) Policy (v1.0)

## 1. Objective & Applicability
The Performance Improvement Plan provides a structured, transparent, and fair developmental framework to assist confirmed employees who display performance or skill gaps in reaching expected performance standards.
*(Probationary employees and employees serving notice periods are excluded from the PIP policy).*

---

## 2. PIP Triggers
A PIP may be initiated based on:
- **Performance / Deliverables**: Repeated failure to meet agreed KRAs/KPIs, declining work quality, or frequent errors requiring excessive oversight.
- **Skill / Capability Gaps**: Inability to perform core technical/role responsibilities despite coaching and feedback.
- **Work Discipline / Conduct**: Conduct directly impacting work output (e.g., poor collaboration, unaddressed attendance issues).
- **PMS Outcome**: Receiving a **Rating 1 (Needs Improvement)** in the annual PMS evaluation.

---

## 3. PIP Duration & Review Schedules

| PIP Category | PIP Duration | Check-in Review Frequency | Target Gap Type |
| :--- | :--- | :--- | :--- |
| **Critical Performance Gap (Default)** | **1 Month** | **Weekly** | Urgent deliverable or output failures |
| **Developmental Improvement** | **2 Months** | **Bi-Weekly** | Skill acquisition / process adaptation |

*Extension*: A PIP may be extended by up to **1 additional month** with prior written HR approval under exceptional circumstances (e.g., medical leave of employee or manager).

---

## 4. PIP Execution Steps

### Step 1: Initiation & Objective Setting
- Manager and HR detail specific performance gaps, clear measurable goals, timelines, and support resources (training/coaching).
- Formal discussion held with employee; employee signs acknowledgment on Zoho People.

### Step 2: Monitoring & Evaluation Scale
During check-ins, the Manager evaluates progress using a 3-point scale:
- **Good**: Exceeds PIP targets for the period.
- **Satisfactory**: Meets PIP targets for the period.
- **Unsatisfactory**: Fails to meet PIP targets for the period.

*Critical Consequence*: Receiving **Unsatisfactory ratings in consecutive reviews** empowers the company to advise the employee to resign or initiate termination.

### Step 3: Final PIP Outcome

| Review Outcome | Action Taken |
| :--- | :--- |
| **Successful Completion** | Employee successfully exits PIP, returns to normal performance cycle, and regains increment eligibility. |
| **Partial Progress** | Short extension granted with HR approval in special cases. |
| **Unsuccessful Completion** | Employment separation processed in line with company policy and exit rules. |

---

## 5. Confidentiality & Zoho People Tracking
All PIP records, check-in scores, and notes must be logged in **Zoho People → Performance → PIP**. PIP details are strictly confidential between the Employee, Manager, HRBP, and Authorized Leadership.

> **Official Source Precedence**: The official *PIP Policy v1.0* in Zoho People is the governing authority.`
  },
  {
    id: 'posh-policy',
    title: 'Prevention of Sexual Harassment (POSH) Policy',
    version: '3.0',
    revisionDate: '10-Aug-2026',
    preparedBy: 'Human Resource & Legal',
    approvedBy: 'Senior Management',
    applicability: 'All employees (regular, temporary, probationers, trainees, contract workers) and visitors across physical and digital workplaces',
    owner: 'Internal Complaints Committee (ICC)',
    fileName: 'POSH_Policy_v3.0.md',
    whatItAnswers: [
      'What constitutes sexual harassment under Esyasoft policy and POSH Act 2013?',
      'Are digital workplace channels (MS Teams, WhatsApp, Zoom, email, social media) covered?',
      'Who forms the Internal Complaints Committee (ICC) and how do I contact them?',
      'How do I lodge a complaint and what is the 3-month filing timeline?',
      'What are conciliation, formal inquiry rules, interim relief, and confidentiality guidelines?',
      'What actions occur for substantiated complaints or malicious false claims?'
    ],
    keyThingsToKnow: [
      'Zero Tolerance Policy: Strict prohibition of unwelcome physical, verbal, or non-verbal conduct of a sexual nature. Covers both women and men.',
      'Digital Workplace Coverage: Explicitly includes MS Teams, WhatsApp, video calls, emails, social media, and digital platforms used for work.',
      'Internal Complaints Committee (ICC): Headed by a Senior Female Presiding Officer (Divya Prasad - divya.prasad@esyasoft.com), at least 2 employee members, and 1 independent external member (legal/NGO). Minimum 50% women.',
      'Filing Timeline: Complaint must be lodged within 3 months of the incident (extendable by another 3 months by ICC for recorded reasons).',
      'Inquiry Timeline: Copy sent to respondent within 7 working days; respondent replies within 10 working days; inquiry completed within 90 days; ICC report submitted within 10 days of completion; Management implements recommendations within 60 days.',
      'Interim Relief: Complainant may request transfer, change of reporting officer, or up to 3 months paid leave (in addition to normal entitlements).',
      'Conciliation Option: Available ONLY upon written request by the aggrieved person within 2 weeks of complaint.',
      'Confidentiality: Absolute confidentiality of identity, evidence, and proceedings. Public/social media disclosure is strictly prohibited.',
      'Malicious Claims: Action may be taken for knowingly false/forged claims; however, inability to prove does NOT imply malicious intent.'
    ],
    contentMarkdown: `# Prevention of Sexual Harassment (POSH) Policy (v3.0)

## 1. Policy Statement & Scope
Esyasoft is committed to maintaining a safe, respectful, and professional working environment free from sexual harassment, enforcing the statutory provisions of the *Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013* and company safety frameworks across all physical offices, client locations, work travel, and digital spaces.

---

## 2. Workplace Definition Includes Digital Spaces
"Workplace" explicitly extends beyond physical office premises to encompass:
- Digital communication tools: **Microsoft Teams, WhatsApp, Zoom, Google Meet**.
- Corporate email, official social media interactions, and virtual work events.
- Client sites, transit during official travel, and company-sponsored gatherings.

---

## 3. What Constitutes Sexual Harassment?
Prohibited unwelcome conduct of a sexual nature (verbal, physical, or non-verbal) includes:
- Physical contact and unwelcome advances.
- Demands or requests for sexual favors.
- Sexually coloured remarks, jokes, innuendoes, or comments on clothing/body.
- Displaying pornography, sexually suggestive objects, or offensive digital media.
- Unwanted persistent calls, messages, or social media stalking.
- Quid Pro Quo: Implied or explicit promises of preferential employment treatment or threats of detrimental treatment tied to sexual favors.
- Hostile Work Environment: Conduct creating an intimidating, offensive, or hostile work environment.

---

## 4. Internal Complaints Committee (ICC)
The company has constituted an Internal Complaints Committee comprising:
- **Presiding Officer**: Senior Female Employee (**Divya Prasad** — divya.prasad@esyasoft.com).
- **Internal Members**: At least 2 employees committed to workplace equality.
- **External Member**: 1 independent expert from an NGO or legal background familiar with POSH laws.
- *Gender Composition*: At least **50% of total ICC members must be women**.

---

## 5. Complaint Filing & Inquiry Timelines

### 5.1 Filing a Complaint
- Any aggrieved person (or authorized representative with written consent) can file a written complaint to the ICC within **3 months** from the date of the incident (or last incident in a series).
- The ICC may extend the filing window by up to **another 3 months** for reasons recorded in writing.
- Digital evidence (chat logs, screenshots, emails) should be preserved and attached.

### 5.2 Conciliation Process
- Before initiating a formal inquiry, the ICC may attempt conciliation **only upon the explicit written request of the aggrieved person**.
- Conciliation proceedings must be completed within **2 weeks**. Monetary settlement cannot be a basis for conciliation.

### 5.3 Formal Inquiry Timelines

| Stage | Prescribed Statutory Timeline |
| :--- | :--- |
| **Notice to Respondent** | Copy of complaint forwarded to respondent within **7 working days**. |
| **Respondent Reply** | Respondent must submit written reply with evidence within **10 working days**. |
| **Inquiry Completion** | Inquiry completed within **90 calendar days** from initiation. |
| **ICC Report Submission** | Final report with recommendations sent to Employer within **10 calendar days** of completion. |
| **Management Implementation**| Employer must implement recommendations within **60 calendar days**. |

---

## 6. Interim Relief Options
During an ongoing inquiry, upon written request from the complainant, the ICC may recommend:
- Transfer of complainant or respondent to another team/department.
- Granting paid leave to the aggrieved person up to **3 months** (over and above normal leave entitlements).
- Restraining the respondent from evaluating the complainant’s work performance.

---

## 7. Confidentiality & Malicious Complaints
- **Strict Confidentiality**: Identities of complainant, respondent, witnesses, and inquiry details are strictly confidential by law. Disclosure on public or social platforms attracts severe disciplinary action.
- **Protection against Malicious Claims**: Sanctions exist for deliberately false or forged complaints. However, *inability to substantiate a complaint does not by itself constitute a malicious claim*.

---

## 8. ICC Contact Route
To lodge a concern or seek confidential guidance, contact the ICC Presiding Officer:
- **Email**: divya.prasad@esyasoft.com or via the official HR POSH Portal on Zoho People.

> **Official Source Precedence**: The official *POSH Policy v3.0* maintained by the ICC is the binding legal document.`
  },
  {
    id: 'zoho-people-handbook',
    title: 'Zoho People 5.0 Employee HRMS Guide',
    version: '5.0',
    revisionDate: '2025',
    preparedBy: 'HR Operations & IT Systems',
    approvedBy: 'Group HR Head',
    applicability: 'All Esyasoft Employees (Team Member role)',
    owner: 'HR Operations & IT Systems',
    fileName: 'Zoho_People_Employee_Handbook_v5.0.md',
    whatItAnswers: [
      'What HR functions can I perform independently via Zoho People self-service?',
      'How do I log daily attendance, check-in/out, or submit attendance regularization?',
      'How do I check leave balances, apply for leave, or view team holiday calendars?',
      'How do I view KRAs, log timesheets, submit performance self-appraisals, and download payslips?'
    ],
    keyThingsToKnow: [
      'Central HR Portal: Zoho People 5.0 is the cloud HRMS web portal and mobile app for all daily HR operations.',
      'Home Module: Profile updates, personal preferences, colleague search, raise HR query, view notifications & dashboard.',
      'Organization & Team Tabs: Company announcements, official policy library, department feed, employee & department org trees, birthdays.',
      'Leave & Attendance Modules: Real-time leave balance check, leave application, shift view, check-in/out, breaks, permission/on-duty requests, attendance regularization.',
      'Performance & Timesheet Modules: View KRAs and goals, submit 360 peer feedback, perform self-appraisals, track project job hours.',
      'Compensation & LMS: Access salary revision letters, payslips, enroll in internal learning courses and track training plans.',
      'External Help Handbook: Link to official Zoho People 5.0 Employee Handbook available for detailed navigation instructions.'
    ],
    contentMarkdown: `# Zoho People 5.0 Employee HRMS Guide

## 1. Overview of Zoho People
Zoho People is Esyasoft's centralized cloud-based Human Resource Management System (HRMS). Accessible via web browser (https://people.zoho.com) and mobile app, it empowers employees to independently manage daily HR workflows.

---

## 2. Core Modules & Key Features

### 2.1 Home & Profile
- **Personal Profile**: View/update emergency contacts, address, personal details, and preferences.
- **Search & Directory**: Search for colleagues across departments and view contact cards.
- **HR Helpdesk**: Raise queries directly to HR operations.

### 2.2 Organization & Team
- **Announcements**: Read company-wide notices, policy updates, and executive messages.
- **Policy Library**: Access official company policy documents.
- **Org & Department Trees**: Visualize company reporting hierarchy and team structures.

### 2.3 Leave & Time Off Service
- **Leave Summary**: Monitor real-time leave balances (EL, SL, CL, Menstrual, CO).
- **Apply / Cancel Leave**: Submit leave requests or cancel upcoming leave.
- **Holiday Calendar**: View mandatory, national, state, and optional holidays.

### 2.4 Attendance Service
- **Check-in / Check-out**: Web and mobile attendance logging.
- **Attendance Regularization**: Submit corrections for missed check-ins or on-duty visits.
- **Permissions**: Request short leaves or work permissions.

### 2.5 Performance & PMS Service
- **KRAs & Goals**: Review assigned key result areas and performance objectives.
- **Self-Appraisal & 360 Feedback**: Complete annual self-evaluations and peer reviews.

### 2.6 Compensation & LMS
- **Salary Letters**: Download annual compensation revision and promotion letters.
- **Learning Management System (LMS)**: Browse internal courses, enroll in learning plans, and track completion certificates.

---

## 3. Help & Official Reference
- Official Zoho Help Center Guide: https://help.zoho.com/portal/en/kb/people/employee-handbook-5-0

> **Official Source Precedence**: Operational details match the *Zoho People 5.0 Employee Handbook*.`
  },
  {
    id: 'employee-referral-policy',
    title: 'Employee Referral Bonus Policy',
    version: '1.0',
    revisionDate: '03-06-2025',
    preparedBy: 'HRBP / Talent Acquisition',
    approvedBy: 'Group HR Head',
    applicability: 'All full-time Esyasoft employees across India (excluding Leadership, Hiring Managers for the role, & HR/TA team)',
    owner: 'Talent Acquisition Team',
    fileName: 'Employee_Referral_Policy_v1.0.md',
    whatItAnswers: [
      'Who can refer candidates and which job positions qualify for a referral bonus?',
      'What is the exact referral bonus amount for a successful hire?',
      'What is the payout timeline and what conditions must be satisfied?',
      'How do I submit a candidate referral step-by-step through Zoho Recruit?',
      'Who is excluded from participating or earning a referral bonus?'
    ],
    keyThingsToKnow: [
      'Bonus Amount: ₹20,000 (subject to applicable taxes) per successful hire for eligible positions posted on the Employee Referral Portal.',
      'Payout Schedule: Paid out 90 days after candidate\'s Date of Joining (DOJ).',
      'Payout Conditions: 1. Candidate completes onboarding/orientation; 2. Successful Background Verification (BGV); 3. Referring employee is actively employed and NOT on notice period at payout time.',
      'Mandatory Submission Channel: Must submit candidate details & resume strictly through Zoho Recruit → Employee Referral BEFORE candidate applies directly or via third party.',
      'Exclusions: Leadership team members, interviewers / hiring managers for the specific role, HR / TA team members, and candidates re-joining within 1 year of exit.',
      'Recovery Clause: If referral bonus is paid and candidate subsequently fails BGV, the bonus amount may be recovered from the referring employee.'
    ],
    contentMarkdown: `# Employee Referral Bonus Policy (v1.0)

## 1. Overview & Program Purpose
The Employee Referral Bonus Program encourages employees to refer qualified talent to fill open positions across Esyasoft Group.

---

## 2. Bonus Amount & Payout Conditions

### Referral Bonus Amount
- **₹20,000** (subject to applicable statutory tax deductions) for each successful hire in an eligible role posted on the Employee Referral Portal.

### Payout Schedule & Mandatory Criteria
The referral bonus is disbursed **90 calendar days after the candidate’s Date of Joining (DOJ)**, subject to:
1. Candidate successfully completes onboarding and initial 90 days of service.
2. Candidate completes **Background Verification (BGV)** with a "Clear" status.
3. The referring employee remains **actively employed** with Esyasoft on the payout date.
4. The referring employee is **NOT serving a notice period** on the payout date.

---

## 3. Eligibility & Exclusions

### Who Can Participate?
All regular full-time Esyasoft India employees, except excluded roles.

### Excluded Categories (Ineligible for Bonus)
- Leadership Team Members (VPs, CXOs, Directors).
- Interviewers and Hiring Managers for the specific open role.
- Talent Acquisition and HR Team Members.
- Referrals of former employees rejoining within 1 year of separation.
- Candidates already in the Zoho Recruit database within the past 6 months.

---

## 4. How to Submit a Referral (Step-by-Step)
1. Log into **Zoho Recruit** using your Esyasoft SSO credentials.
2. Navigate to **Employee Referral Portal → Open Jobs**.
3. Select the target position and click **Refer Candidate**.
4. Fill candidate details, attach their updated Resume/CV, and submit.

*Critical Rule*: Referrals submitted outside Zoho Recruit (e.g., email forwards, chat messages) are **strictly ineligible** for referral bonus payout.

> **Official Source Precedence**: Governed by *Employee Referral Bonus Policy v1.0* on Zoho Recruit.`
  },
  {
    id: 'training-certification-policy',
    title: 'Training & Certification Reimbursement Policy',
    version: '1.0',
    revisionDate: '14-05-2025',
    preparedBy: 'Head – Talent Development',
    approvedBy: 'Group HR Head',
    applicability: 'Confirmed permanent employees and direct contractors as part of Joint Ventures (Probationers & notice period excluded)',
    owner: 'Talent Development Team',
    fileName: 'Training_Certification_Reimbursement_Policy_v1.0.md',
    whatItAnswers: [
      'What external training courses and professional certifications qualify for reimbursement?',
      'What prior approvals are strictly required before enrolling or paying for a course?',
      'What is the service commitment / retention recovery matrix for training costing > ₹10,000?',
      'How do I claim reimbursement via Zoho Expense after completing the certification?',
      'Are exam retake fees reimbursable if I fail on the first attempt?'
    ],
    keyThingsToKnow: [
      'Eligibility: Must be a confirmed employee, not on notice period. Training must be directly relevant to current role or future career path with business ROI justification.',
      'Mandatory Prior Approvals: Written approval required BEFORE enrolling/paying from: 1. Reporting Manager, 2. Business Unit Head, 3. Head – Talent Development.',
      'Service Commitment Matrix (For training > ₹10,000): Exit <6 months (100% recovery), 6-9 months (75%), 9-12 months (50%), 12-24 months (25%), >24 months (Nil).',
      'Reimbursement Workflow: After passing, raise claim in Zoho Expense attaching GST invoice/fee receipt, completion certificate, and prior approval email.',
      'Exam Retakes: Retake fees for failed attempts are strictly NON-REIMBURSABLE.',
      'Policy Contact: divya.prasad@esyasoft.com'
    ],
    contentMarkdown: `# Training & Certification Reimbursement Policy (v1.0)

## 1. Objective & Scope
This policy defines financial support, prior approval processes, and service retention commitments for external training programs and professional certifications undertaken by confirmed Esyasoft employees.

---

## 2. Eligibility & Prior Approval Rules

### Eligibility Criteria
- Must be a **confirmed permanent employee** (or direct contractor under a Joint Venture).
- Must **NOT be serving a notice period** or undergoing a Performance Improvement Plan (PIP).
- Program must be directly relevant to the employee’s current responsibilities or agreed career path.

### Mandatory Prior Approvals (Before Payment/Enrollment)
Prior written approval via email must be secured from:
1. **Reporting Manager**
2. **Business Unit Head (BU Head)**
3. **Head – Talent Development**

*Note*: Enrolling in or completing a course without prior formal approval forfeits reimbursement eligibility.

---

## 3. Service Commitment & Recovery Matrix

For any training or certification where company expenditure exceeds **₹10,000**, a service retention commitment applies. If the employee resigns or exits the company before completing the retention period, recovery is made from their Full & Final (F&F) settlement as follows:

| Tenure Completed Post Training | Recovery Percentage from F&F |
| :--- | :--- |
| **Less than 6 Months** | **100% Recovery** |
| **6 to 9 Months** | **75% Recovery** |
| **9 to 12 Months** | **50% Recovery** |
| **12 to 24 Months** | **25% Recovery** |
| **Over 24 Months** | **0% (Nil Recovery)** |

---

## 4. Non-Reimbursable Costs
- **Exam Retakes**: If an employee fails a certification exam on the first attempt, retake fees are **strictly non-reimbursable**.
- Membership fees or annual renewal fees unrelated to core certification.
- Courses completed without pre-approved business justification.

---

## 5. How to Claim Reimbursement
1. Upon successful completion, obtain the official tax invoice / payment receipt and pass certificate.
2. Submit an Expense Claim in **Zoho Expense** under "Training Reimbursement".
3. Attach original receipts, certificate, and prior approval email chain.

> **Official Contact**: For queries, email divya.prasad@esyasoft.com. Official *Training & Certification Policy v1.0* takes precedence.`
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
    fileName: 'Holiday_Calendar_2026.md',
    whatItAnswers: [
      'How many National, Mandatory, State, and Optional holidays are in the 2026 calendar?',
      'Which dates are National and Mandatory holidays across Esyasoft India?',
      'How many Optional holidays can I select and how do I apply for them in Zoho People?',
      'What is the complete list of all 36 holidays in 2026?'
    ],
    keyThingsToKnow: [
      'Holiday Categories: National (4), Mandatory (7), State (2), Optional (Choice of any 4 per year). Total 36 listed holidays.',
      'National Holidays 2026: Republic Day (Jan 26, Mon), May Day (May 01, Fri), Independence Day (Aug 15, Sat), Gandhi Jayanti (Oct 02, Fri).',
      'Mandatory Holidays 2026: Eid-ul-Fitr (Mar 21, Sat), Good Friday (Apr 03, Fri), Bakrid (May 28, Thu), Ganesh Chaturthi (Sep 14, Mon), Ayudha Pooja/Dussehra (Oct 20, Tue), Diwali (Nov 08, Sun), Christmas (Dec 25, Fri).',
      'Optional Holiday Rule: Employees may select any 4 optional holidays per calendar year in Zoho People.'
    ],
    contentMarkdown: `# Esyasoft Holiday Calendar 2026

## 1. Overview & Holiday Structure
Esyasoft India operates on a holiday framework comprising **National Holidays**, **Mandatory Holidays**, **State-Specific Holidays**, and **Optional Holidays**. Employees are entitled to select **any 4 Optional Holidays** during the calendar year via Zoho People.

---

## 2. Complete 2026 Holiday Master List

| # | Date | Day | Holiday Name | Holiday Type |
| :--- | :--- | :--- | :--- | :--- |
| 1 | 01-Jan-2026 | Thursday | New Year's Day | Optional |
| 2 | 15-Jan-2026 | Thursday | Makar Sankranti / Magh Bihu / Pongal | Optional |
| 3 | 23-Jan-2026 | Friday | Vasant Panchami / Netaji Subhas Chandra Bose Jayanti | Optional |
| **4** | **26-Jan-2026** | **Monday** | **Republic Day** | **National** |
| 5 | 15-Feb-2026 | Sunday | Mahashivratri | Optional |
| 6 | 19-Feb-2026 | Thursday | Chhatrapati Shivaji Maharaj Jayanti | Optional |
| 7 | 04-Mar-2026 | Wednesday | Holi | Optional |
| 8 | 19-Mar-2026 | Thursday | Ugadi / Gudi Padwa / Telugu New Year | Optional |
| **9** | **21-Mar-2026** | **Saturday** | **Ramzan / Eid-ul-Fitr** | **Mandatory** |
| 10 | 27-Mar-2026 | Friday | Ram Navami | Optional |
| 11 | 31-Mar-2026 | Tuesday | Mahavir Jayanti | Optional |
| **12** | **03-Apr-2026** | **Friday** | **Good Friday** | **Mandatory** |
| 13 | 14-Apr-2026 | Tuesday | Tamil New Year / Vishu / Bohag Bihu / Dr. B.R. Ambedkar Jayanti | Optional |
| 14 | 15-Apr-2026 | Wednesday | Bengali New Year | Optional |
| **15** | **01-May-2026** | **Friday** | **May Day / Maharashtra Din / Buddha Purnima** | **National** |
| **16** | **28-May-2026** | **Thursday** | **Bakrid / Id-ul-Zuha** | **Mandatory** |
| 17 | 26-Jun-2026 | Friday | Muharram | Optional |
| **18** | **15-Aug-2026** | **Saturday** | **Independence Day** | **National** |
| 19 | 21-Aug-2026 | Friday | Varalakshmi Puja | Optional |
| 20 | 26-Aug-2026 | Wednesday | Onam / Milad-un-Nabi | Optional |
| 21 | 28-Aug-2026 | Friday | Raksha Bandhan | Optional |
| 22 | 04-Sep-2026 | Friday | Janmashtami | Optional |
| **23** | **14-Sep-2026** | **Monday** | **Ganesh Chaturthi** | **Mandatory** |
| 24 | 17-Sep-2026 | Thursday | Vishwakarma Puja | Optional |
| **25** | **02-Oct-2026** | **Friday** | **Mahatma Gandhi Jayanti** | **National** |
| **26** | **20-Oct-2026** | **Tuesday** | **Ayudha Pooja / Dussehra** | **Mandatory** |
| 27 | 21-Oct-2026 | Wednesday | Vijayadashami / Dasara | Optional |
| 28 | 01-Nov-2026 | Sunday | Karnataka Rajyotsava | State (Karnataka) |
| **29** | **08-Nov-2026** | **Sunday** | **Diwali / Deepavali** | **Mandatory** |
| 30 | 10-Nov-2026 | Tuesday | Govardhan Puja / Balipadyami | Optional |
| 31 | 11-Nov-2026 | Wednesday | Chitragupta Pooja / Bhai Dooj | Optional |
| 32 | 16-Nov-2026 | Monday | Chhath Puja | Optional |
| 33 | 24-Nov-2026 | Tuesday | Guru Nanak Jayanti / Karthika Purnima | Optional |
| 34 | 03-Dec-2026 | Thursday | Feast of St. Francis Xavier | Optional |
| 35 | 19-Dec-2026 | Saturday | Goa Liberation Day | State (Goa) |
| **36** | **25-Dec-2026** | **Friday** | **Christmas Day** | **Mandatory** |

---

## 3. How to Select Optional Holidays
1. Log into **Zoho People** (https://people.zoho.com).
2. Go to **Leave → Apply Leave → Optional Holiday**.
3. Select up to **4 days** from the optional list above for approval.

> **Official Source Precedence**: Governed by official *Esyasoft Holiday Calendar 2026*.`
  }
];

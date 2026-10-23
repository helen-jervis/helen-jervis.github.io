export interface Role {
  when: string;
  org: string;
  place?: string;
  title?: string;
  summary?: string;
}

export const roles: Role[] = [
  {
    when: 'Oct 2016 – now',
    org: 'Morgan Stanley',
    place: 'London',
    title: 'Architect Scrum Master, Project Manager, Product Owner',
    summary:
      'Finance and Risk IT change in the Funding & Finance Technology division. I lead agile teams across a range of projects, most recently the re-architecture of the core finance systems, with a focus on stakeholder management, process efficiency and AI solution development in a regulated environment.',
  },
  {
    when: '2012 – 2016',
    org: 'Career break',
    title: 'Full-time parent',
    summary:
      'Four years out of the workplace while my children were small, followed by the Morgan Stanley Return to Work programme.',
  },
  {
    when: 'Sep 2006 – Jan 2012',
    org: 'Xenomorph Software',
    title: 'Account Manager',
    summary:
      'Client relationships for a boutique provider of analytics and data management software to investment banks, hedge funds and asset managers worldwide.',
  },
  {
    when: 'Mar 2005 – Sep 2006',
    org: 'Succinct Communications',
    title: 'Account Manager',
    summary:
      'Medical communications and scientific education for global pharmaceutical programmes, from pre-launch to post-patent expiry.',
  },
  {
    when: '2001 – Mar 2005',
    org: 'Surface Measurement Systems',
    title: 'Product Specialist',
  },
  {
    when: 'Oct 1999 – 2001',
    org: 'Osaka National Research Institute',
    place: 'Japan',
    title: 'Postdoctoral Researcher',
    summary: 'Two years researching liquid crystals.',
  },
  {
    when: '1999',
    org: 'PhD in Chemistry',
  },
];

export const strengths = [
  {
    name: 'Agile delivery',
    detail: 'Scrum, sprint planning and getting complex programmes delivered on time.',
  },
  {
    name: 'Stakeholder management',
    detail: 'Closing the gap between the people who use a system and the people who build it.',
  },
  {
    name: 'Systems architecture',
    detail: 'Re-architecting core finance systems and infrastructure platforms.',
  },
  {
    name: 'Financial services',
    detail: 'Banking, risk and finance technology in a regulated environment.',
  },
  {
    name: 'Process efficiency',
    detail: 'Untangling complex, interdependent systems and processes.',
  },
  {
    name: 'Mentoring',
    detail: 'Supporting returners and making the case for flexible working.',
  },
];

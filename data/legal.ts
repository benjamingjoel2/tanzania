/**
 * Legal pages: Privacy Policy, Booking Terms and Cookie Policy (owner checklist, 1 November 2026).
 * In the text, [[email]], [[privacy]] and [[cookies]] are rendered as links by app/legal/[slug]/page.tsx;
 * a { table } block is rendered as a table. The cookie table lists exactly what the site stores.
 */
export type LegalBlock = string | string[] | { table: string[][] };
export interface LegalPageContent {
  slug: string;
  title: string;
  sections: { heading: string; body: LegalBlock[] }[];
}

export const legalUpdated = "1 November 2026";

export const legalPages: LegalPageContent[] = [
  {
    "slug": "privacy",
    "title": "Privacy Policy",
    "sections": [
      {
        "heading": "Who we are",
        "body": [
          "Uhuru Journeys plans and arranges tailor-made trips. We are the controller of the personal data described in this policy.",
          "Address: ZO Spaces Seacliff, Toure Drive, Masaki, Dar es Salaam, Tanzania",
          "Email: [[email]]"
        ]
      },
      {
        "heading": "What data we collect",
        "body": [
          [
            "Enquiry details: what you enter in our enquiry form or send us by email, such as your name, email address, travel dates, number of travellers, interests, budget and your message.",
            "Booking details: when you book, what we need to arrange your trip, such as the full names of travellers as shown in their passports, dates of birth, nationality, arrival and departure details, dietary requirements and, only if you choose to share them, health or mobility needs.",
            "Correspondence: the emails and messages you exchange with us.",
            "Technical data: when you visit the site, our hosting provider automatically records server logs with your IP address, browser type, the pages requested and the date and time. They are used only to run the site securely and to fix errors.",
            "Browser storage: the small items described in our cookie policy."
          ],
          "We do not collect payment card details through this website, and the site uses no analytics or advertising trackers."
        ]
      },
      {
        "heading": "Why we use it and our legal bases",
        "body": [
          [
            "To answer your enquiry and prepare a proposal: steps taken at your request before entering into a contract, and our legitimate interest in replying to people who contact us.",
            "To book and run your trip, including passing the necessary details to the suppliers who deliver it: performance of our contract with you.",
            "To take account of health or mobility information you choose to share: your explicit consent, which you can withdraw at any time.",
            "To keep the site secure and working, and to handle complaints or legal claims: our legitimate interests.",
            "To keep accounting and tax records: compliance with our legal obligations.",
            "To send you news, only if you have asked for it: your consent, which you can withdraw at any time."
          ],
          "We never sell your personal data, and we do not use it for automated decision-making or profiling."
        ]
      },
      {
        "heading": "Who we share it with",
        "body": [
          [
            "Vercel Inc., which hosts this website and processes the technical logs described above.",
            "Vercel also runs our enquiry form, so the details you send are received and briefly logged on its servers before they reach us.",
            "Our email provider, which stores and delivers the messages we exchange with you.",
            "The travel suppliers who deliver your trip, such as hotels, lodges and camps, transport and transfer companies, airlines, activity providers and park or permit authorities. Each receives only what it needs for your booking.",
            "Professional advisers, public authorities or courts, where the law requires it or to establish or defend legal claims."
          ],
          "Our service providers act on our instructions and must keep your data secure and confidential."
        ]
      },
      {
        "heading": "International transfers",
        "body": [
          "Vercel and some of our other providers may process data in the United States and other countries. Your trip takes place in Tanzania, so the suppliers there receive the details they need. Where data protection law requires it, we rely on adequacy decisions, standard contractual clauses or equivalent safeguards, or on the transfer being necessary to perform the contract you asked us for. You can ask us for details of these safeguards."
        ]
      },
      {
        "heading": "How long we keep it",
        "body": [
          [
            "Enquiries that do not lead to a booking: up to two years after our last contact.",
            "Booking records: as long as tax and accounting law requires, usually up to seven years after your trip.",
            "Health or mobility details: deleted once your trip is over, unless you ask us to keep them for a future trip.",
            "Server logs: kept by our hosting provider for a short period, normally no more than 30 days."
          ]
        ]
      },
      {
        "heading": "How we protect it",
        "body": [
          "We keep personal data in access-controlled systems, use encrypted connections (HTTPS) on this site and share data only as described here. If a breach affects your data and puts your rights at risk, we will tell you without undue delay."
        ]
      },
      {
        "heading": "Your rights",
        "body": [
          "Depending on where you live, you have the right to:",
          [
            "access the personal data we hold about you;",
            "have inaccurate data corrected (rectification);",
            "have your data deleted (erasure);",
            "restrict how we use your data (restriction);",
            "receive your data in a portable format or have it sent to someone else (portability);",
            "object to our use of your data based on legitimate interests, and to direct marketing at any time (objection);",
            "withdraw your consent at any time, without affecting what we did before;",
            "complain to a data protection supervisory authority, in particular in the country where you live or work."
          ],
          "To exercise any of these rights, email us. We reply within one month.",
          "Email: [[email]]"
        ]
      },
      {
        "heading": "Cookies",
        "body": [
          "This site uses only the browser storage described in our cookie policy.",
          "[[cookies]]"
        ]
      },
      {
        "heading": "Children",
        "body": [
          "This website is not aimed at children and we do not knowingly collect data from children under 16. We only process details of children travelling with their family when a parent or guardian gives them to us for a booking."
        ]
      },
      {
        "heading": "Changes to this policy",
        "body": [
          "We may update this policy when our services or the law change. The date at the top shows when it was last updated."
        ]
      },
      {
        "heading": "Contact",
        "body": [
          "Questions about this policy or your personal data: write to Uhuru Journeys at the address above, or email us.",
          "Email: [[email]]"
        ]
      }
    ]
  },
  {
    "slug": "terms",
    "title": "Booking Terms",
    "sections": [
      {
        "heading": "1. Who we are",
        "body": [
          "Uhuru Journeys (“we”, “us”) plans and arranges tailor-made trips. These terms, together with your proposal and booking confirmation, form your contract with us.",
          "Address: ZO Spaces Seacliff, Toure Drive, Masaki, Dar es Salaam, Tanzania",
          "Email: [[email]]"
        ]
      },
      {
        "heading": "2. How a booking is made and confirmed",
        "body": [
          "Every trip starts with an enquiry. We then send you a written proposal with the itinerary, the price and what is included. Prices on this website are “from” prices per person, given as a guide; your final price is the one confirmed in writing in your proposal.",
          "Your booking is made when you accept the proposal in writing and pay the deposit, and it is confirmed when we send you a written booking confirmation. The person who makes the booking must be at least 18 years old and accepts these terms on behalf of everyone travelling."
        ]
      },
      {
        "heading": "3. Deposit, balance and prices",
        "body": [
          "A deposit, stated in your proposal, is due when you book. The balance is due on the date shown in your booking confirmation, normally 60 days before departure. If you book less than 60 days before departure, the full price is due when you book.",
          "If the balance is not paid on time, we may treat the booking as cancelled by you and apply the cancellation charges below.",
          "Once your booking is confirmed we will not increase the price, except where taxes, park or entry fees or fuel costs imposed by third parties change. We will tell you as soon as possible and show how the change was calculated. If the increase is more than 8% of the trip price, you may cancel and receive a full refund."
        ]
      },
      {
        "heading": "4. What is included",
        "body": [
          "Your proposal and booking confirmation list exactly what is included, typically the accommodation, transport, transfers and activities in your itinerary, and the meals stated.",
          "Unless stated otherwise, the price does not include international flights, travel insurance, visas, vaccinations, drinks, tips, personal expenses, optional activities or anything not listed as included."
        ]
      },
      {
        "heading": "5. Changes by you",
        "body": [
          "If you want to change your trip after it is confirmed, tell us in writing. We will do our best to make the change, subject to availability. You pay any costs charged by suppliers and any difference in price. Changing your travel dates, or a major change close to departure, may be treated as a cancellation.",
          "You may transfer your booking to another person who meets all the conditions of the trip by telling us in writing at least 14 days before departure. You and that person are jointly responsible for any balance and for the extra costs the transfer causes."
        ]
      },
      {
        "heading": "6. Cancellation by you",
        "body": [
          "You may cancel at any time by writing to us; the cancellation takes effect on the day we receive it. Unless your booking confirmation sets different charges, we charge the following share of the total trip price:",
          [
            "More than 60 days before departure: loss of the deposit",
            "60 to 31 days before departure: 50% of the trip price",
            "30 to 15 days before departure: 75% of the trip price",
            "14 days or less before departure, or if you do not travel: 100% of the trip price"
          ],
          "Some elements, such as flights, permits and certain peak-season stays, cannot be refunded once booked; your proposal says so where this applies. Your travel insurance may cover cancellation charges."
        ]
      },
      {
        "heading": "7. Changes and cancellation by us",
        "body": [
          "We plan carefully, but we sometimes have to change arrangements. If we make a minor change, such as a comparable hotel or a different route, we will tell you as soon as we can. If we have to make a significant change or cancel your trip, we will tell you promptly and you may accept the change, choose a comparable alternative, or cancel and receive a full refund of everything you have paid us.",
          "For departures with a minimum number of travellers, we may cancel if that number is not reached, telling you at least 45 days before departure and refunding everything you have paid us."
        ]
      },
      {
        "heading": "8. Travel insurance",
        "body": [
          "Travel insurance is a condition of booking. Your policy must cover cancellation, medical treatment, emergency evacuation and repatriation, and the activities in your itinerary. Please send us the policy details before you travel."
        ]
      },
      {
        "heading": "9. Passports, visas and health",
        "body": [
          "You are responsible for holding a valid passport, any visas or entry permits, and the vaccinations and health documents your trip requires, and for checking the rules that apply to your nationality. Entry and health rules change; we share the information we have, but please confirm it with the relevant embassy, official government sources and your doctor before you travel."
        ]
      },
      {
        "heading": "10. Our responsibility",
        "body": [
          "We are responsible for arranging the services in your booking confirmation with reasonable skill and care. If any part of your trip is not provided as agreed, tell the supplier and us straight away so we can try to put it right.",
          "We are not responsible for loss, damage or delay caused by you or a member of your party, by a third party unconnected with the services we arranged, or by unusual and unforeseeable circumstances beyond our control. Where international conventions limit a supplier’s liability, for example for flights, our liability is limited in the same way. Except for death or personal injury caused by our negligence, our liability is limited to the total price of your trip. Nothing in these terms limits rights you have under consumer law that cannot be excluded."
        ]
      },
      {
        "heading": "11. Your behaviour",
        "body": [
          "Please respect the laws and customs of the places you visit, follow the safety instructions of our suppliers and local hosts, and our reasonable instructions. If your behaviour puts others at risk or seriously disturbs them, we or the supplier may end your trip without refund, and you will pay any costs that result."
        ]
      },
      {
        "heading": "12. Complaints",
        "body": [
          "If something goes wrong during your trip, tell the supplier and us straight away so we can try to fix it on the spot. If it is not resolved, email us within 28 days of your return. We acknowledge complaints within 14 days and aim to reply in full within 28 days.",
          "Email: [[email]]"
        ]
      },
      {
        "heading": "13. Force majeure",
        "body": [
          "We are not liable for any failure or delay caused by unusual and unforeseeable circumstances beyond our control whose consequences could not have been avoided even with all due care, such as war, civil unrest, terrorism, natural disaster, epidemic, severe weather, strikes, or the closure of airports, borders or parks. If such circumstances prevent your trip from going ahead as booked, we will offer you a comparable alternative or a refund of the money you have paid us."
        ]
      },
      {
        "heading": "14. Data protection",
        "body": [
          "We use your personal data to arrange your trip, as explained in our privacy policy.",
          "[[privacy]]"
        ]
      },
      {
        "heading": "15. Governing law",
        "body": [
          "These terms, and any dispute arising from them, are governed by the law of Tanzania, and the courts of Tanzania have jurisdiction. If you are a consumer, you may also bring proceedings in the courts of the country where you live, and you keep the protection of the mandatory consumer law of that country."
        ]
      },
      {
        "heading": "16. Contact",
        "body": [
          "Questions about these terms or your booking:",
          "Email: [[email]]"
        ]
      }
    ]
  },
  {
    "slug": "cookies",
    "title": "Cookie Policy",
    "sections": [
      {
        "heading": "What cookies are",
        "body": [
          "Cookies are small text files that a website saves in your browser. Similar technologies, such as local storage and session storage, let a site keep small pieces of information in your browser. In this policy, “cookies” covers all of them."
        ]
      },
      {
        "heading": "What this site uses",
        "body": [
          "This site sets no cookies. It uses only the browser storage listed below, which is needed for features you choose to use.",
          {
            "table": [
              [
                "Name",
                "Purpose",
                "Duration",
                "Type"
              ],
              [
                "uhuru:trip-planner:v2",
                "Remembers your answers and the step you reached in the trip planner so you can finish later; cleared when you send it",
                "Until you clear your browser storage",
                "Local storage, essential"
              ],
              [
                "uhuru:currency",
                "Remembers the display currency you chose for prices",
                "Until you clear your browser storage",
                "Local storage, essential"
              ],
              [
                "uhuru:cookie-consent",
                "Remembers your answer to the cookie notice so it is not shown again",
                "Until you clear your browser storage",
                "Local storage, essential"
              ]
            ]
          },
          "We do not use analytics, advertising or social-media tracking cookies."
        ]
      },
      {
        "heading": "Consent",
        "body": [
          "Essential items do not need your consent because the site, or a feature you ask for, cannot work without them. If we ever add cookies that are not essential, such as analytics, we will ask for your consent first and update this policy."
        ]
      },
      {
        "heading": "Third-party content",
        "body": [
          [
            "This website is hosted by Vercel, which processes your IP address in its server logs to deliver the pages. Vercel sets no cookies on this site.",
            "Photographs and fonts are served from this website, so no third party receives your data when they load.",
            "We do not embed videos, social-media widgets or advertising."
          ]
        ]
      },
      {
        "heading": "How to manage or disable cookies",
        "body": [
          "You can view and delete cookies and site data at any time in your browser settings, and you can block them altogether. Look for “cookies” or “site data” in the privacy settings of Chrome, Firefox, Safari or Edge; each browser’s help pages explain the steps.",
          "If you block site storage, the site still works, but the planner, currency choice and cookie notice will not remember your choices."
        ]
      },
      {
        "heading": "Changes to this policy",
        "body": [
          "We will update this policy if the way this site uses cookies changes. The date at the top shows the latest version."
        ]
      },
      {
        "heading": "Contact",
        "body": [
          "Questions about this policy:",
          "Email: [[email]]"
        ]
      }
    ]
  }
];

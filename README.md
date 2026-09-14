# S2L stakeholder prototype

Open `index.html` in any modern browser. No installation, build step, server, or internet connection is required.

## Suggested demo route

1. Start in **Admin → Farms & maps** and publish the reviewed East Meadow boundary. This shows shared map governance without giving Admin finance authority.
2. Open the signed-in user's profile from the top-right identity control. Change the mobile number, send a verification challenge, and show the masked-number code screen. Demonstrate incorrect/expired/attempt-limit errors, resend cooldown and **Change number** before entering any code to simulate a successful backend verification. The browser never receives or checks the expected code.
3. Switch to **Farmer → Login / register**. Register the fictional Riverbend Farming user to show that verification happens before an unowned account can enter the Sales pool. Return to sign in and enter the Green Estate demo account.
4. In **Farmer**, create the priced SO-1058 order, then open **Contact support** and submit SUP-204. Both actions remain valid without Sales approval.
5. Switch to **Sampling Manager** and open the notification bell. SO-1058 is visible immediately with its payment hold and separate in-app/SMS outcomes; reading it does not release scheduling.
6. Switch to **Sales** and open the bell. Emma receives separate order and support alerts because she is Green Estate's current representative. Open **Farmer support** to show the unresolved request.
7. Open **Sales → Unassigned farmers**, request Meadowbrook ownership, then switch to the distinct **Sales Manager → Assignment requests** role to approve it. Show that pending claims do not grant customer access and approval retains ownership history.
8. In **Sales Manager**, show team-wide totals, separate Sales-created versus Farmer-portal attribution, the competing Oakridge claims, and the fallback support request with a missing-number SMS state retained in-app.
9. Return to **Sales** and create a separate sales-assisted work order. Only successful submission creates the deduplicated Operations alert; saving or abandoning a draft does not.
10. Switch to **Sampling Manager → Schedule / Operators** to assign work using capability, equipment, location, and workload context. Save the assignment, then switch to **Operator** and open the notification bell. Reading either channel does not accept or start work.
11. In **Operator**, show the allocated six-pod Smart Case and offline-first synchronisation, then demonstrate typed, voice, and photo/file notes with confirm-before-share AI classification.
12. Save the flooding note, return to Sales, and show one shared exception on Green Estate's timeline. Open **Finance → Orders / Reconciliation** to see the commercial blocker and exception-only Sample matching.
13. Switch to **Laboratory → Active Orders** and scan pod `P1042`. Continue through Receiving, aggregation and report publication, then return to **Farmer → Reports** to show the same authorised report version.
14. Switch to **Operator → Dispatch & collections**. SO-1049 starts blocked because only 11 of 12 commissioned records are durably reconciled. Simulate the final server sync, then book collection, print two parcel labels and record physical handover. A full tray or local Sync action never passes the gate.
15. Open **Operator → My shipments** and simulate carrier delivery. The carrier event changes to delivered, but laboratory custody remains pending.
16. Switch to **Laboratory → Incoming parcels** and reconcile the actual contents. Parcel 1 is accepted with six identified pods while Parcel 2 remains outstanding, proving carrier delivery does not accept the complete manifest.
17. Open **Laboratory → Empty pod returns**. Release five empty liner-free pods while P1047 remains in laboratory use, book the partial return, print its label and simulate return delivery to the original Green Estate collection-address snapshot.
18. Return to **Operator → My shipments** and reconcile the five returned pods. They remain unavailable for reuse until inspection and fresh-liner preparation. Review **Sampling Manager → Logistics**, **Admin → Integrations**, **Farmer → My orders** and **Finance → Orders** for role-appropriate oversight and state boundaries.

The prototype follows the v0.9.3 requirements, including S2L-WEB-024 through S2L-WEB-034, S2L-LAB-002, the section 4.11.5 phone-number flow and the section 4.14 integrated logistics journey, plus UX v0.2 decisions. All information is fictional and held only in browser memory for the current page session; payments, SMS delivery, phone verification, carrier booking, labels, tracking, parcel handover, laboratory custody, file security, permissions, map editing, and integrations are simulations rather than production capabilities.

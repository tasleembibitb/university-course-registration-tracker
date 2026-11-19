# University Course Registration Tracker

A single-page web app that tracks university course registration —
course code, teacher, days and times, credit hours, a weekly timetable
and a countdown to the registration deadline — and flags any course that
is missing from the portal, so you know exactly who to ask.

Built by **Tasleem Bibi** (final-year BSCS, Begum Nusrat Bhutto Women
University, Sukkur, Sindh, Pakistan) from her own Fall 2026 registration:
two courses booked in minutes, and the third one nowhere in the portal.

## How to run

No build step and no server needed:

1. Open `index.html` in any modern browser (double-click it, or serve the folder).
2. The tracker comes pre-filled with the demo example: **three real Fall
   2026 courses** — Web Technologies and Linear Algebra are booked; Computer
   Organization & Assembly Language is still missing from the portal.
3. Mark a course booked or pending, remove one, or add your own with the form.
4. Tick the "Before classes start" checklist.
5. Your list is saved in your browser (localStorage), so it is still there
   when you come back.

## Features

- Per-course code, name, program / semester / section, teacher, days and
  times, and credit hours.
- Status badges: **Booked** or **Pending**, with one-click toggling.
- Summary count: courses booked, pending, and credit hours booked.
- Countdown to the registration deadline (about 2 Dec 2026 — the portal
  showed "13 days left" on 19 Nov 2026; confirm the exact date on the
  portal).
- Weekly timetable for the booked courses with confirmed times.
- "Before classes start" checklist — including asking the teacher whether
  the missing course data has been entered. Saved in the browser.
- Clean, professional design in dark navy and teal (TB branding),
  mobile-responsive. No personal photo, no fake logos.

## Demo result (pre-filled values)

On 19 November 2026 the demo list shows:

- **Web Technologies — CSC209**, BSCS 5th Semester, Muhammad Bilal,
  Thu + Fri 12:55 – 2:39 PM, 3 credit hours — **Booked**
- **Linear Algebra — MTH102**, BSCS 3rd Semester, Section B, Nawab Khan,
  Mon + Thu 10:50 AM – 12:34 PM, 3 credit hours — **Booked**
- **Computer Organization & Assembly Language — COAL**, BSAI 3rd Semester,
  Section B, Mr. Imran Siddiqui, Thu + Fri (time not confirmed) — **Pending:
  not found in the portal** (searched by name, code and teacher)

Total: 2 of 3 courses booked, 6 credit hours.

## Files

- `index.html` — page structure, timetable and the add-course form
- `style.css` — dark navy / teal styling, mobile-responsive
- `script.js` — courses, statuses, countdown and localStorage saving
- `README.md` — this file

## Note

This is a demo tracker. Course codes, teachers and times are real for the
example, but always confirm them on your university portal. Never put a
password, phone number, CNIC number or roll number into a tracker or a
public post.

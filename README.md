# University Course Registration Tracker

A single-page web app that tracks university course registration —
course code, teacher, days and times, credit hours, a weekly timetable
and a countdown to the registration deadline — and flags any course that
is missing from the portal, so you know exactly who to ask.

Built by **Tasleem Bibi** (final-year BSCS, Begum Nusrat Bhutto Women
University, Sukkur, Sindh, Pakistan) with sample courses: two booked,
one missing from the portal.

## How to run

No build step and no server needed:

1. Open `index.html` in any modern browser (double-click it, or serve the folder).
2. The tracker comes pre-filled with the demo example: **three sample
   courses** — Introduction to Programming and Calculus are booked;
   English Composition is still missing from the portal.
3. Mark a course booked or pending, remove one, or add your own with the form.
4. Tick the "Before classes start" checklist.
5. Your list is saved in your browser (localStorage), so it is still there
   when you come back.

## Features

- Per-course code, name, program / semester / section, teacher, days and
  times, and credit hours.
- Status badges: **Booked** or **Pending**, with one-click toggling.
- Summary count: courses booked, pending, and credit hours booked.
- Countdown to the registration deadline (15 Dec 2026 — sample date;
  set your own).
- Weekly timetable for the booked courses with confirmed times.
- "Before classes start" checklist — including asking the teacher whether
  the missing course data has been entered. Saved in the browser.
- Clean, professional design in dark navy and teal (TB branding),
  mobile-responsive. No personal photo, no fake logos.

## Demo result (sample data)

- **Introduction to Programming — CSC101**, BSCS 1st Semester, Mr. Ahmed,
  Mon + Wed 9:00 – 10:30 AM, 3 credit hours — **Booked**
- **Calculus — MTH201**, BSCS 2nd Semester, Ms. Fatima,
  Tue + Thu 11:00 AM – 12:30 PM, 3 credit hours — **Booked**
- **English Composition — ENG102**, BSCS 1st Semester, Mr. Ali,
  Fri (time not confirmed) — **Pending: not found in the portal**

Total: 2 of 3 courses booked, 6 credit hours.

## Files

- `index.html` — page structure, timetable and the add-course form
- `style.css` — dark navy / teal styling, mobile-responsive
- `script.js` — courses, statuses, countdown and localStorage saving
- `README.md` — this file

## Note

This is a demo tracker with sample data only. Never put a password, phone
number, CNIC number or roll number into a tracker or a public post. Always
confirm real course details on your university portal.

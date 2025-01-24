## Tasks

1. Fix any glaring bugs and anti patterns.
2. Improve the design UI/UX to make the experience better for prospective patients. We value design heavily at Solace so feel free to flex your skills in this area. The repo is set up with tailwind but feel free to use any styling framework you’d like.
3. Consider both frontend and backend performance improvements. Assume we have a database of hundreds of thousands of advocates we need to search through.

...

## Improvements

Key Improvements:

- Avoided multiple nested `.then()` calls in my API request
  - replaced with async/await for better readability and error handling.
- Implemented `useMemo` for filtering
  - optimizes performance by eliminating recomputation of filteredAdvocates when input changes
- Semantic and react-specific improvements:
  - Added `<thead>` and `<tbody>` properly
  - Included `<label>` for input for better accessibility
  - Avoided direct DOM manipulation by removing `document.getElementById` in favor of react state
  - Used key attributes in map calls to follow react best practices
- Styling improvements
  - Made use of tailwind styling for better consistency and imroved UI
- Maintainability improvements
  - Pulled out separate modular react page components into `components` folder and imported them into `page.tsx`

## Next Steps

Given more time, I would:

- continue building out the pagination and filtering functionality of the API.
  - I have already implemented the capability for the API to do paginated querying (using limit and offset), and I have commented out my initial implementation of filtering.
  - I would next need to make use of the pagination and filtering in my call to the API endpoint in `page.tsx`
- continue improving the UI/UX of the app
  - I have already added a custom tailwind color palette and an header and footer section to give the page a more realistic balanced look
  - I would continue adding functionality to the table, including sort-by-column and filtering
  - I would build out a user auth/management module to separate patient users from internal admin users
    - admin users might be able to modify advocate records in the table directly by deleting, updating rows, etc
    - patient users might be able to select an advocate, save an advocate, etc
  - I would continue fine-tuning the look of the page, incuding using enhanced interactive components for better responsive design

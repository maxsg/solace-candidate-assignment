## Submission

Please see my PR against the original code at: https://github.com/maxsg/solace-candidate-assignment/pull/1

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

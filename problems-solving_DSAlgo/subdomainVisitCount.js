//  Problem: Subdomain Visit Count
// Given a list of count-paired domains (e.g. "9001 discuss.leetcode.com"), return the count of visits to each subdomain.

// For example:
// "9001 discuss.leetcode.com" means:

// "discuss.leetcode.com" got 9001 visits

// "leetcode.com" got 9001 visits

// "com" got 9001 visits

// ✅ Return an array of strings in the same "count domain" format.

// Sample Input:

// js
// Copy
// Edit
// ["9001 discuss.leetcode.com"]
// Sample Output:

// js
// Copy
// Edit
// ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
// Constraints:

// You may receive multiple entries

// Sum the counts for duplicate domains

// 🔍 Evaluation Criteria
// ✅ Clean logic
// ✅ Correct handling of subdomains
// ✅ Time + space complexity
// ✅ Edge cases (empty input, multiple same domains)
// ✅ Bonus: Use a Map, String.split(), and avoid unnecessary nesting

// ⚠️ Instructions
// Start coding whenever ready (aim for ~25–35 min max)

// Post your solution & your thought process

// I’ll review it as if I were the Amazon interviewer

// Then I’ll either give a second challenge or front-end-flavored twist

// Would you like to start this one now?
// 🕐 If yes, reply: “Starting now” — and your hour clock begins.
// We’ll simulate the Amazon flow and build confidence fast. Ready?

// You said:
// Starting now coach. I need some more examples

// ChatGPT said:
// 🔥 Let’s go — clock starts now!
// ⏱️ You’ve got ~60 min total, aim for 25–35 min for coding.

// Here are more examples to guide you:

// 🧪 Example 1
// Input:

// js
// Copy
// Edit
// ["9001 discuss.leetcode.com"]
// Output:

// js
// Copy
// Edit
// [
//   "9001 discuss.leetcode.com",
//   "9001 leetcode.com",
//   "9001 com"
// ]
// 🧪 Example 2
// Input:

// js
// Copy
// Edit
// [
//   "900 google.mail.com",
//   "50 yahoo.com",
//   "1 intel.mail.com",
//   "5 wiki.org"
// ]
// Output (order can vary):

// js
// Copy
// Edit
// [
//   "901 mail.com",
//   "50 yahoo.com",
//   "900 google.mail.com",
//   "5 wiki.org",
//   "5 org",
//   "1 intel.mail.com",
//   "951 com"
// ]
// Explanation:

// "google.mail.com" → "google.mail.com", "mail.com", "com"

// "intel.mail.com" → "intel.mail.com", "mail.com", "com"

// Totals:

// "mail.com" = 900 + 1 = 901

// "com" = 900 + 1 + 50 = 951

// "org" = 5

// 🧪 Constraints:
// Input array of strings ["count domain"], length ≤ 1000

// You must sum counts across repeated subdomains

const subdomainVisitCount = (visits) => {
  const map = new Map();
  let result = [];
  for (let entries of visits) {
    const visitCount = parseInt(entries.split(' ')[0]);
    if (!visitCount) {
      continue;
    }
    let domain = entries.split(' ')[1];
    map.set(domain, (map.get(domain) ?? 0) + visitCount);
    while (domain !== '') {
      const index = domain.indexOf('.');
      if (index === -1) {
        break;
      }
      domain = domain.substring(index + 1);
      map.set(domain, (map.get(domain) ?? 0) + visitCount);
    }
  }
  for (let [key, value] of map) {
    result.push(`${value} ${key}`);
  }

  return result;
};

const input = [
  '900 google.mail.com',
  '50 yahoo.com',
  '1 intel.mail.com',
  '5 wiki.org',
];

console.log(subdomainVisitCount(input));

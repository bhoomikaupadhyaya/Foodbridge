# Database Design

# FoodBridge Database Design

## Collections

1. Users
2. Donations
3. Requests
4. Notifications

---

# 1. Users Collection

| Field | Type | Description |
|-------|------|-------------|
| _id | ObjectId | Unique ID |
| fullName | String | User's Full Name |
| email | String | Email Address |
| password | String | Encrypted Password |
| phone | String | Contact Number |
| role | String | donor / ngo / admin |
| address | String | Address |
| city | String | City |
| state | String | State |
| pincode | String | Postal Code |
| createdAt | Date | Registration Date |

---

# 2. Donations Collection

| Field | Type |
|-------|------|
| _id | ObjectId |
| donorId | ObjectId |
| foodName | String |
| foodType | String |
| quantity | Number |
| description | String |
| image | String |
| pickupAddress | String |
| expiryTime | Date |
| status | Available / Accepted / Completed |
| createdAt | Date |

---

# 3. Requests Collection

| Field | Type |
|-------|------|
| _id | ObjectId |
| donationId | ObjectId |
| ngoId | ObjectId |
| status | Pending / Approved / Rejected |
| requestedAt | Date |

---

# 4. Notifications Collection

| Field | Type |
|-------|------|
| _id | ObjectId |
| userId | ObjectId |
| title | String |
| message | String |
| isRead | Boolean |
| createdAt | Date |
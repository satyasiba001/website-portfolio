First of all, **well done**. 👏

You didn't just read about S3—you actually:

* ✅ Created a bucket
* ✅ Hosted a static website
* ✅ Understood **Block Public Access**
* ✅ Configured a **Bucket Policy**
* ✅ Learned the difference between **403 Forbidden** and **404 NoSuchKey**
* ✅ Enabled **Versioning**
* ✅ Uploaded multiple versions
* ✅ Explored how rollback works

This is already beyond what many beginners do.

---

# 📚 What else should you learn in S3?

Here's an interview-focused roadmap.

| Topic                    | Must Know    | Practical |
| ------------------------ | ------------ | --------- |
| Bucket & Objects         | ✅            | ✅         |
| Storage Classes          | ✅            | ⬜         |
| Versioning               | ✅            | ✅         |
| Bucket Policy            | ✅            | ✅         |
| IAM vs Bucket Policy     | ✅            | ⬜         |
| ACL                      | ✅ (basic)    | ⬜         |
| Encryption               | ✅            | ⬜         |
| Lifecycle Rules          | ✅            | ⬜         |
| Cross-Region Replication | ✅            | ⬜         |
| Event Notifications      | ✅            | ⬜         |
| Pre-signed URLs          | ✅            | ⬜         |
| Multipart Upload         | ✅            | ⬜         |
| Object Lock              | Intermediate | ⬜         |
| Transfer Acceleration    | Intermediate | ⬜         |
| Access Logs              | Intermediate | ⬜         |
| Intelligent Tiering      | Intermediate | ⬜         |

---

# ⭐ Theory You Should Know

## 1. What is Amazon S3?

Amazon S3 (Simple Storage Service) is an **object storage service** used to store and retrieve any amount of data from anywhere.

It stores data as:

```
Bucket
   │
   ├── index.html
   ├── photo.jpg
   ├── backup.zip
   └── logs/app.log
```

A bucket is like a container, and files are stored as **objects**.

---

## 2. What is an Object?

An object consists of:

```
Object
│
├── Key (name/path)
├── Data
├── Metadata
└── Version ID (if enabled)
```

Example:

```
Key = images/logo.png
Size = 20 KB
Storage Class = Standard
Metadata = Content-Type:image/png
```

---

## 3. Is S3 a file system?

**No.**

It is **object storage**, not block storage or a traditional file system.

It does not have real directories.

```
css/style.css
```

is just an object key.

---

## 4. Why are bucket names globally unique?

Bucket names are part of the URL:

```
https://mybucket.s3.amazonaws.com
```

Since DNS names must be unique globally, bucket names must also be globally unique.

---

## 5. S3 Consistency Model

Modern S3 provides **strong read-after-write consistency**.

When you upload:

```
index.html
```

you can immediately read the latest version.

Years ago, overwrites and deletes were eventually consistent, but that is no longer the case.

---

# ⭐ Storage Classes

| Storage Class              | Use Case                     |
| -------------------------- | ---------------------------- |
| Standard                   | Frequently accessed data     |
| Standard-IA                | Infrequently accessed        |
| One Zone-IA                | Lower cost, single AZ        |
| Intelligent-Tiering        | Automatically optimizes cost |
| Glacier Instant Retrieval  | Archive with quick access    |
| Glacier Flexible Retrieval | Long-term archive            |
| Glacier Deep Archive       | Lowest-cost archival storage |

---

# ⭐ Versioning

Without versioning:

```
Upload V1
      ↓
Upload V2

V1 is lost
```

With versioning:

```
Upload V1
      ↓
Upload V2
      ↓
Upload V3

All versions are preserved
```

---

# ⭐ Bucket Policy vs IAM Policy

## IAM Policy

Attached to:

* User
* Group
* Role

Controls **what that identity can do**.

Example:

```
Developer
    │
    ▼
Can upload objects
```

---

## Bucket Policy

Attached to the bucket.

Controls **who can access that bucket**.

Example:

```
Internet Users
        │
        ▼
Can read objects
```

---

# ⭐ ACL vs Bucket Policy

ACLs are the older permission mechanism.

AWS now recommends:

* ✅ IAM Policies
* ✅ Bucket Policies

instead of ACLs.

That's why new buckets are created with **ACLs disabled**.

---

# ⭐ Encryption Types

### SSE-S3

AWS manages encryption keys.

```
Data
   │
Encrypt
   │
Store
```

Easy to use.

---

### SSE-KMS

Uses AWS Key Management Service.

Provides:

* Key rotation
* Audit logs
* Fine-grained access control

Preferred for enterprise environments.

---

### SSE-C

You provide the encryption key with every request.

Less common and harder to manage.

---

# ⭐ Lifecycle Rules

Automatically move or delete objects.

Example:

```
30 days → Standard-IA
90 days → Glacier
365 days → Delete
```

This helps reduce storage costs.

---

# ⭐ Cross-Region Replication (CRR)

```
Mumbai Bucket
        │
Replication
        ▼
Singapore Bucket
```

Useful for disaster recovery and global availability.

Requires **versioning** to be enabled.

---

# ⭐ Pre-signed URL

A private object can be shared temporarily.

```
Private Object
       │
Generate URL
       │
Expires in 10 minutes
       ▼
Anyone with the URL can access it until expiry
```

Commonly used for secure downloads and uploads.

---

# ⭐ Multipart Upload

Large files are split into parts:

```
Part 1
Part 2
Part 3
Part 4
      │
      ▼
Combined into one object
```

Benefits:

* Faster uploads
* Parallel processing
* Resume if interrupted

---

# 🎯 Top 25 Interview Questions

1. What is Amazon S3?
2. What is the difference between object storage and block storage?
3. Why are bucket names globally unique?
4. What is an S3 object?
5. Can you rename a bucket?
6. What is versioning?
7. What is a delete marker?
8. What is Block Public Access?
9. Difference between 403 and 404 in S3 static websites?
10. What is a bucket policy?
11. Difference between IAM policy and bucket policy?
12. What is a pre-signed URL?
13. What are S3 storage classes?
14. What is Intelligent-Tiering?
15. Difference between SSE-S3 and SSE-KMS?
16. What is lifecycle management?
17. What is Cross-Region Replication?
18. Why is versioning required for replication?
19. What is multipart upload?
20. Can one bucket span multiple regions?
21. Can an EC2 instance mount S3 like a local disk?
22. What happens when you delete an object from a versioned bucket?
23. How do you host a static website on S3?
24. Why did your website show **403 Forbidden**, and how did you fix it?
25. Why did it later show **404 NoSuchKey**, and what caused that?

---

# 🚀 Real-world S3 project ideas

To deepen your practical knowledge, try these next:

1. **Host a private website behind CloudFront with an Origin Access Control (OAC).**
2. **Configure S3 Event Notifications to trigger a Lambda function on file upload.**
3. **Implement lifecycle rules that move logs to Glacier automatically.**
4. **Generate and test pre-signed upload and download URLs.**
5. **Replicate objects between two buckets in different AWS regions.**
6. **Deploy your static website using the AWS CLI (`aws s3 sync`) or a CI/CD pipeline such as GitHub Actions.**

Completing those projects will give you experience with many of the S3 concepts commonly used by DevOps and Cloud Engineers in production environments.

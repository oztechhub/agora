# Agora - Complete Social Media Platform

A comprehensive social media platform built with Next.js, TypeScript, Prisma, and NextAuth.js. This platform features debates, communities, verified users, and much more.

## Features Implemented

### ✅ Authentication System
- **Sign Up Flow**: Complete signup form with username, email, password validation
- **Login Flow**: Email/username login with password toggle visibility
- **Account Types**: Regular User, Public Figure, Verified Politician
- **Profile Setup**: Bio, profile picture, account type selection
- **Password Security**: Bcrypt hashing, minimum 8 characters

### ✅ Main Dashboard/Home Feed
- **Navigation Bar**: Sticky top navigation with logo, search, notifications, messages
- **Three-Column Layout**: 
  - Left sidebar: User profile card, trending topics, suggested users
  - Center: Post composer and feed
  - Right sidebar: Active communities, footer links
- **Post Feed**: Infinite scroll with post cards showing engagement metrics

### ✅ Post Creation System
- **Text Posts**: 280 character limit with counter
- **Media Upload**: Support for images (up to 4 images)
- **Post Types**: Standard posts, polls, debate challenges
- **Audience Selection**: Public, Followers, Community
- **Real-time Validation**: Character counter, media preview

### ✅ Post Interactions
- **Like System**: Heart animation, real-time count updates
- **Repost System**: Quick repost and quote repost functionality
- **Bookmark System**: Save posts for later
- **Reply System**: Threaded replies support
- **Engagement Metrics**: Visible counts for all interactions

### ✅ User Profiles
- **Profile Page**: Cover photo, profile picture, bio, stats
- **Profile Tabs**: Posts, Replies, Media, Debates
- **Profile Actions**: Follow/Unfollow, Message, Edit Profile
- **Verification Badges**: Blue for verified, gold for politicians
- **Stats Display**: Following, Followers, Posts count

### ✅ Settings
- **Profile Settings**: Edit name, bio, location, website
- **Account Management**: Delete account functionality
- **Form Validation**: Real-time validation with error messages

## Features To Be Implemented

### 🔄 Communities System
- Community discovery and creation
- Community management (moderators, rules)
- Community-specific feeds
- Join/leave functionality

### 🔄 Debate Feature
- Debate challenge creation
- Split-screen debate view (For/Against)
- Evidence requirement system
- Audience voting
- Debate results and analytics

### 🔄 Notifications System
- Real-time notification dropdown
- Notification types (follows, likes, replies, mentions, debates)
- Notification settings
- Unread indicators

### 🔄 Direct Messaging
- Conversation list
- Message threads
- Real-time messaging
- Group chat support
- Message read receipts

### 🔄 Search & Explore
- Unified search bar
- Search categories (Users, Posts, Communities, Hashtags)
- Explore page with trending content
- Personalized recommendations

### 🔄 Additional Features
- Analytics dashboard for verified users
- Advanced moderation tools
- Content warnings and fact-checking
- Poll creation and voting
- Hashtag tracking
- Report system

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: SQLite (Prisma ORM)
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Validation**: Zod
- **Forms**: React Hook Form
- **Date Handling**: date-fns

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
# The .env file should already have DATABASE_URL
npx prisma generate
npx prisma db push
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
agora/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/
│   │   ├── api/                # API routes
│   │   │   ├── auth/           # Authentication endpoints
│   │   │   └── posts/          # Post endpoints
│   │   ├── auth/               # Auth pages (login, signup)
│   │   ├── home/               # Main dashboard
│   │   ├── profile/            # User profiles
│   │   └── settings/           # Settings page
│   ├── components/             # React components
│   │   ├── Navigation.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostComposer.tsx
│   │   └── SettingsForm.tsx
│   ├── lib/
│   │   ├── prisma.ts           # Prisma client
│   │   └── auth.ts             # NextAuth configuration
│   └── types/                  # TypeScript types
└── public/                     # Static assets
```

## Database Schema

The platform uses Prisma with SQLite. Key models include:
- **User**: Accounts with verification and account types
- **Post**: Posts with media, polls, debates
- **Like, Repost, Bookmark**: Engagement models
- **Follow, Block, Mute**: Social relationships
- **Community, CommunityMember**: Community system
- **Debate, DebateArgument, DebateVote**: Debate system
- **Notification**: Notification system
- **Conversation, Message**: Messaging system
- **Hashtag, Report**: Content management

## Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key-change-in-production"
NEXTAUTH_URL="http://localhost:3000"
```

## Development Roadmap

1. ✅ Core authentication and user management
2. ✅ Post creation and feed
3. ✅ Post interactions (likes, reposts, bookmarks)
4. ✅ User profiles
5. 🔄 Communities system
6. 🔄 Debate feature
7. 🔄 Notifications
8. 🔄 Direct messaging
9. 🔄 Search and explore
10. 🔄 Analytics dashboard
11. 🔄 Mobile optimizations
12. 🔄 Advanced moderation tools

## Contributing

This is a comprehensive social media platform. To contribute:
1. Review the specification
2. Pick a feature to implement
3. Follow the existing code patterns
4. Test thoroughly
5. Submit improvements

## License

This project is built as a demonstration of a complete social media platform architecture.

# This is not maintained as it was a class project from 2015. Not affiliated with Pixieset.

# Twinkieset

Live: [twinkieset.com](http://twinkieset.karenling.net)

#### Splash/landing Page
<img src="http://images.karenling.net/aa/readme/01.png" width="33%"><img src="http://images.karenling.net/aa/readme/02.png" width="33%"><img src="http://images.karenling.net/aa/readme/03.png" width="33%">

#### Simple Admin Interface
<img src="http://images.karenling.net/aa/readme/06.png" width="50%"><img src="http://images.karenling.net/aa/readme/07.png" width="50%">

#### Clean Client Interface
<img src="http://images.karenling.net/aa/readme/04.png" width="50%"><img src="http://images.karenling.net/aa/readme/05.png" width="50%">

### Main Features
* Admin and Client interface are asynchronous
* Admin users can sort their photos by drag and drop, file name, date, or randomly. Subalbums are also sortable by drag and drop. [[code]](https://github.com/karenling/project-proposal/blob/master/app/assets/javascripts/views/admin/07_photos_index.js)
* Admins can optionally hide and/or password protect albums [[code]](https://github.com/karenling/project-proposal/blob/master/app/assets/javascripts/views/admin_forms/album_edit.js)
* Admin accounts require activation via email [[code]](https://github.com/karenling/project-proposal/blob/master/app/controllers/users_controller.rb)
* Admins can recover/reset their password via email [[code]](https://github.com/karenling/project-proposal/blob/master/app/controllers/users_controller.rb)
* Client galleries are responsive using Masonry [[code]](https://github.com/karenling/project-proposal/blob/master/app/assets/javascripts/views/public/04_public_subalbum_photos.js)


## Minimum Viable Product
Twinkieset is a client photo gallery for modern photographers, inspired by [Pixieset](http://pixieset.com/), built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] View albums, galleries, and photos
- [x] Create albums
- [x] Create subalbums
- [x] Delete albums, subalbums
- [x] Edit albums, subalbums
- [x] Create/upload and delete photos
- [x] Client side albums
- [x] Authorize albums
- [x] Drag + drop to sort photos
- [x] Photos can be sorted by name, upload date, date taken, and randomly.

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (~0.5 day)
I will implement authentication using BCrypt based on how I was taught at AppAcademy to create users and sessions. The goal for this phase will be to push a basic working application to Heroku that will allow users to sign up, sign in, and sign out.

[Details][phase-one]

### Phase 2: Album, Subalbum, and Photo View (~2 days)

Ii'll implement the CRUD (create, read, update, destroy) for albums, subalbums, and photos under an API namespace which will serve JSON data. Then I will add Backbone models and collections to fetch the data from the API point. By the end of the days, admin users will be able to view albums, subalbums, and photos, all in a single Backbone app.

[Details][phase-two]

### Phase 3: Album, and Subalbum Creation (~0.5 - 1 day)
I will add forms to allow admin users to create albums, subalbums in a Backbone view. Admin users will then be able to create albums, and subalbums without ever having to reload the page.

[Details][phase-three]

### Phase 4: Create/upload photos (~1-2 days)

I will implement the ability to upload multiple photos through [Cloudinary](http://cloudinary.com/).  
[Details][phase-four]

### Phase 5: Album, Subalbum, and Photo Views for Guests (~2 days)

For this phase I will create Backbone views for the guest users. Users will be able to input a password if the admin for the album chose to password protect it. The landing page will allow users to click on an image, which will display as a full-page modal that essentially becomes a carousel. The landing page will be able to infinitely scroll.

[Details][phase-five]

### Phase 6: Delete and edit Albums, Subalbums, and Photo Views (~2 days)

Admin users will be able to edit their albums, subalbums, and photos through Backbone.

[Details][phase-six]

### Phase 7: Sorting photos by drag and drop, by name, date, etc.

Photos will be drag and droppable using jQuery UI Sortable.

[Details][phase-seven]


### Bonus Features (TBD)
- [x] Splash page with examples and demos
- [x] Allow users to edit profile and change password
- [x] Account Activation via email
- [x] Send password to clients via email
- [ ] Subdomain for users
- [ ] Friendly URL
- [ ] RMagick or MiniMagick to resize and watermark images
- [ ] Choice of templates
- [ ] Photo Lab Integration to order images using WHCC gem


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md

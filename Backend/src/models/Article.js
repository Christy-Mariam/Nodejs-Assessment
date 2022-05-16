const mongoose = require('mongoose');
// const slugify = require( '../utils/slugify' );
const commentsSchema = require('./Comments');

const articleSchema = new mongoose.Schema({
    authorName: {
        type: String,
        unique: true
    },
    title: {
        type: String,
        unique: true
    },
    abstract: {
        type: String,
        minlength: 20
    },
    createdAt: {
        type: Date
    },
    comments: {
        type: commentsSchema
    },
    imageUrl: {
        type: String
    }
    // }, {
    //     toJSON: { virtuals: true },
    //     toObject: { virtuals: true }
});

// // name: "Guitar basics"
// // slug: "guitar-basics"
// workshopSchema.pre( 'save', function( next ) {
//     this.slug = this.slug || slugify( this.name );
//     next();
// });

// workshopSchema.virtual( 'topics', {
//     ref: 'Topic',
//     localField: '_id',
//     foreignField: 'workshop'
// });

mongoose.model('Article', articleSchema);
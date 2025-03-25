import mongoose from 'mongoose';
import domPurifier from 'dompurify';
import { JSDOM } from 'jsdom';
import slug from 'mongoose-slug-generator';
const htmlPurify = domPurifier(new JSDOM().window);

//initialize slug
mongoose.plugin(slug);

const postSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    category: { type: String, required: true },
    tag: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    downloadFile: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

postSchema.pre('validate', function (next) {
  //check if there is a description
  if (this.description) {
    this.description = htmlPurify.sanitize(this.description);
  }

  next();
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post;

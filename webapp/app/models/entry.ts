import mongoose, {Schema} from 'mongoose';

mongoose.connect(process.env.MONGO_URI!);
mongoose.Promise = global.Promise;

const entrySchema = new Schema({
  _id: String,
  entry_in_english: String,
  entry_type: String,
  categories: [String],
  sub_entries: [{
    definitions: {
      "As a Noun": [String],
      "As a Verb or Adjective": [String],
      "As Modifier": [String],
      "Augmented Meaning": [String],
      "Interactive": [String],
      None: [String],
    },
    keywords: [String],
    regions: [Number],
    video_links: [String]
  }]
});

const Entry = mongoose.model('Entry', entrySchema);

export default mongoose.models.Entry || Entry;

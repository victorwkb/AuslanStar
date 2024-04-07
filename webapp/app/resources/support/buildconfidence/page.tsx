import React from 'react';
import FlipCard from '@/components/FlipCard';
import styles from '@/styles/FlipCard.module.css';

const cardData = [
  { id: 1, frontContent: 'Practice active listening during conversations', backContent: 'Pay close attention to verbal and non-verbal cues and really try to understand what they are saying and feeling.' },
  { id: 2, frontContent: 'Value their opinions and foster sound decision making', backContent: 'Try to solve problems together in a positive and calm way and encourage them to think about the pros and cons by considering other perspectives.' },
  { id: 3, frontContent: 'Offer them space when they ask for it', backContent: 'If your child is slow to communicate with you, don\'t take it personally. Be supportive and remind them that you can talk to them when they are ready.' },
  { id: 4, frontContent: 'Give your child responsibility', backContent: 'Learning to manage new responsibilities is the first step in building independence. Start with small responsibilities and gradually take on larger and more complex responsibilities.' },
  { id: 5, frontContent: 'Praise your child', backContent: 'Use descriptive praise and encouragement to build confidence.' },
  { id: 6, frontContent: 'Create comfort in the familiar', backContent: 'Family rituals and routines can help children with hearing loss gain a sense of control and establish some predictability.' },
  { id: 7, frontContent: 'Reinforce truths about their hearing loss', backContent: 'Help children identify and resist negative influences by nurturing their pride and interest in exploration, and planning together to achieve future goals.' },
  { id: 8, frontContent: 'Seek out positive role models', backContent: 'Showing children with hearing loss positive role models can boost their self-confidence and inspire them to overcome challenges and achieve success in the future.' },
  // more card info
];

const BuildConfidence = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-gray-400">
        <div className="max-w-5xl px-4 py-10 ml-16">
          <h1 className="text-4xl font-bold text-white leading-tight whitespace-normal">
            Build Confidence
          </h1>
          <p className="text-base text-white mt-2">
            8 tips for parents to build confidence in kids with hearing loss
          </p>
        </div>
      </div>

      {/* Topic 1 */}
      <div className="max-w-5xl px-4 pt-8 pb-2 ml-16">
        <h1 className="text-3xl font-bold mb-4">8 tips for parents to build confidence in kids with hearing loss</h1>
      </div>

      {/* Cards 1-8 */}
      <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-4">
        <div className="flex flex-wrap -mx-2">
          <div className={styles.cardContainer}>
            {cardData.slice(0, 8).map((card) => (
              <FlipCard
                key={card.id}
                frontContent={card.frontContent}
                backContent={card.backContent}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Reference and Disclaimer */}
      <footer style={{ fontSize: '12px', color: '#aaa', textAlign: 'center', marginTop: '50px', padding: '10px' }}>
        Reference: Information supplied by <a
          href="https://hearandnow.cochlear.com/hearing-solutions/services/kids-with-hearing-loss/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#aaa', textDecoration: 'underline' }}
        >
          Cochlear
        </a>
        <br />Disclaimer: The information contained on this website is not intended as a substitute for independent professional advice.
      </footer>
    </div>
  );

}

export default BuildConfidence;





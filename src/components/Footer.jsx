export const Footer = () => {
  const fullName = 'Ahmad';
  const occupation = 'Web Developer';
  const favoriteQuote = "Time is a precious resource. Don't wait for it to happen, make it happen.";

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>About {fullName}</h3>
        <p>
          Hello, I'm {fullName}, a passionate {occupation}. I love creating innovative and user-friendly web applications that make a difference. Through my work, I strive to push boundaries and explore new possibilities in the digital realm.
        </p>
        <p>
          In my journey as a developer, I've learned that taking risks and embracing failure are key to personal and professional growth. One quote that resonates with me is: 
        </p>
        <blockquote className="favorite-quote">
          "{favoriteQuote}"
        </blockquote>
        <p>
          This quote inspires me to dream big and not be afraid of stumbling along the way. It reminds me that failure is not the end but an opportunity to learn, improve, and achieve greater things.
        </p>
      </div>
      <div className="footer-social">
        {/* Add your social media links here */}
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {fullName}. All rights reserved.</p>
      </div>
    </footer>
  );
};


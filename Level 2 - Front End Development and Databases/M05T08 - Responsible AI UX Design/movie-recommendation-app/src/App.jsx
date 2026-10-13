import './App.css'
import RecommendationReason from './components/RecommendationReason'
import MoviePrompt from './components/MoviePrompt'
import FeedbackButtons from './components/FeedbackButtons'

function App() {

  return (
    <main>
      <header>
        <h1>Responsible AI UX design</h1>
        <p>Designing a movie recommendation platform that is transparent,trustworthy, inclusive, and user-friendly.</p>
      </header>

      <section>
        <h2>Interactive Examples</h2>
        <p>The following examples demonstrate how responsible AI principles can be applied to a movie recommendation platform.</p>
        <MoviePrompt/>
        <RecommendationReason/>
        <FeedbackButtons />
      </section>
      <section>
        <h2>1. Communicating AI Generated Content</h2>
        <p>
           The platform should clearly label AI-generated movie
          recommendations and summaries. Labels such as "AI-generated
          summary" and "AI-assisted recommendation" help users
          understand when AI is involved.
        </p>

        <p>
          The platform should also explain that AI-generated content
          may contain inaccuracies. This helps users understand the
          limitations of AI instead of assuming that every summary
          or recommendation is correct.
        </p>
      </section>

      <section>
        <h2>2. Explaining Movie Recommendations</h2>
        <p>
          The platform should explain why a particular movie has been
          recommended. For example, a movie could be suggested because
          it belongs to a genre the user enjoys or shares themes with
          movies they have previously watched.
        </p>

        <p>
          A "Why am I seeing this?" button can reveal additional
          information when selected. This gives users a clear
          explanation without displaying too much information at once.
        </p>
      </section>

       <section>
        <h2>3. Communicating Uncertainty and Inaccuracies</h2>

        <p>
          AI recommendations are predictions and may not always match
          a user's interests. AI-generated summaries may also contain
          incorrect or misleading information.
        </p>

        <p>
          The interface should display clear messages explaining
          these limitations. For example: "This recommendation is a
          suggestion based on your preferences and may not match your
          interests. AI-generated summaries may contain inaccuracies."
        </p>

        <p>
          The platform should avoid presenting AI outputs as guaranteed
          facts and encourage users to check important movie details
          when necessary.
        </p>
      </section>
      
      <section>
        <h2>4. User Feedback and Control</h2>

        <p>
          Users should be able to tell the platform when a recommendation
          is helpful or irrelevant. Buttons such as "Helpful",
          "Not interested", and "Suggest something different" give
          users control over their experience.
        </p>

        <p>
          The platform could also allow users to adjust their preferred
          genres or report inaccurate summaries. Feedback can help
          identify poor recommendations and guide future improvements.
        </p>

        <p>
          If user activity is used to personalise recommendations,
          the platform should clearly explain how that information
          is used and provide meaningful choices about personalisation.
        </p>
      </section>

      <section>
        <h2>5. Reducing Bias and Improving Inclusivity</h2>

        <p>
          The platform should avoid recommending only popular movies
          or repeatedly showing content from a narrow range of genres
          and perspectives. Over-reliance on viewing history could
          prevent users from discovering different types of films.
        </p>

        <p>
          Recommendations should aim to represent diverse cultures,
          languages, genres, and perspectives, including films from
          underrepresented creators.
        </p>

        <p>
          Users should be able to change their preferences and explore
          unfamiliar genres. The interface should also be accessible
          to people with different abilities and work across different
          screen sizes.
        </p>
      </section>

      <section>
        <h2>6. Handling AI Failures</h2>

        <p>
          AI services may become unavailable because of network
          problems, server errors, or other technical issues. The
          platform should communicate these failures clearly rather
          than leaving users confused or showing a blank page.
        </p>

        <p>
          For example: "Movie recommendations are temporarily
          unavailable. Please try again or browse the available movies
          manually."
        </p>

        <p>
          A "Try again" button should allow users to retry the request.
          The platform should also provide an alternative, such as
          browsing a list of available movies, so users can continue
          using the application if the AI service remains unavailable.
        </p>
      </section>
    </main>
  )
}

export default App

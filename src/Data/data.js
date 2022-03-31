import familyPhoto from "./images/family.jpg";
import fruits from "./images/fruits.jpg";
import asparagus from "./images/asparagus.jpg";
import summerLunch from "./images/summer-lunch.jpg";
import christmasEveMenu from "./images/christmas-eve-menu.jpg";
import exclusiveCookbook from "./images/exclusive-cookbook.jpg";

const data = {
  mainSection: {
    firstParagraph:
      "he way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.",
    secondParagraph:
      "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.",
    firstImage: familyPhoto,
    secondImage: fruits,
    thirdImage: asparagus,
  },

  allSection: {
    title: "ALL THE LATEST FROM AEG",
    readMore: "READ MORE",
    articles: [
      {
        title: "Summer Lunch Menu by Mark Best",
        image: summerLunch,
        content:
          "AEG ambassador Mark Best’s summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
      },
      {
        title: "A Traditional Christmas Eve, Mark Best Style",
        image: christmasEveMenu,
        content:
          "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
      },
      {
        title: "Taking Taste Further",
        image: exclusiveCookbook,
        content:
          "This exclusive cookbook gives you all the know‑how you need. We’ve designed it to make sure you get the most out of our products – and the best out of your food.",
      },
    ],
    randomParagraphs: [
      {
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor iaculis tristique. Aenean id sollicitudin dui, non efficitur neque. Mauris rhoncus tortor augue, eu varius turpis dignissim et. Sed quis placerat risus. Praesent sit amet justo ex. Duis vitae tincidunt ipsum, vitae pellentesque mi. Duis dictum elementum tortor, non aliquet diam lacinia in. Etiam cursus arcu sit amet eros viverra, sit amet aliquam ligula pellentesque. Nullam tempus fringilla nibh, venenatis tincidunt neque suscipit sit amet. Pellentesque eget porttitor felis. In hac habitasse platea dictumst. Donec ac sodales massa. Integer sit amet sapien a elit luctus luctus. Sed cursus id quam a pharetra. Proin rutrum libero quis egestas vulputate.",
      },
      {
        data: "In erat massa, maximus sed erat ut, tempor consequat mi. Maecenas quis iaculis quam, non dapibus orci. Suspendisse dignissim est eu nunc egestas pretium. Cras scelerisque leo risus. Mauris id diam eget ex mattis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius sollicitudin leo at posuere. Nullam commodo elit eget facilisis laoreet. Praesent sem neque, interdum vulputate placerat sit amet, pellentesque a eros. Duis auctor rhoncus lectus eu elementum. Sed condimentum fermentum finibus. Aenean consectetur laoreet diam blandit efficitur. Praesent venenatis ullamcorper suscipit. Sed euismod, elit eget vestibulum pellentesque, arcu lacus consectetur mauris, id finibus felis nisi nec magna. Quisque leo dui, posuere a lobortis eu, bibendum et est. Curabitur ultricies ipsum est, in mattis tellus aliquet ac.",
      },
    ],
  },
};

export default data;

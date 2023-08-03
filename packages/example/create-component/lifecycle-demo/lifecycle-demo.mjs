export const type = $.COMP;
export const tag = "lifecycle-demo";
export const temp = "./lifecycle-demo-template.html";

export default async function () {
  return {
    data: {
      count: 0,
    },
    watch: {
      count(count) {
        console.log("count: ", count);
      },
    },
    created() {
      console.log("created: Component created, data not initialized.");
    },
    ready() {
      console.log(
        "ready: Component is ready with initialized data and template."
      );

      this.on("click", () => {
        this.count++;
      });
    },
    attached() {
      console.log("attached: Component attached to DOM.");
    },
    detached() {
      console.log("detached: Component detached from DOM.");
    },
  };
}

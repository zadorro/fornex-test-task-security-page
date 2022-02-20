<template lang="pug">
  b-container(fluid)
    b-row(align-h="center")
      b-col(cols="12" xl="7" lg="10")
        slot
    b-sidebar#sidebar-right(right backdrop shadow)
      .px-3.py-2
        p
          | Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          | in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          | <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa ducimus eaque illo inventore minima molestias officia pariatur quae quaerat quo, quod reiciendis reprehenderit saepe soluta ullam unde, veniam voluptatem?</span><span>Asperiores at cupiditate deserunt eligendi illum inventore iure labore magni nesciunt nisi, perspiciatis praesentium, quo ratione repudiandae saepe temporibus voluptatem! Ad cum dicta nesciunt numquam totam. Id iste voluptatibus voluptatum.</span><span>Ab adipisci architecto doloribus dolorum eum hic, id in, neque nihil nisi ratione reiciendis sed soluta, voluptas voluptate. Consequuntur ipsum laboriosam magni modi, necessitatibus nisi quam qui ratione soluta totam?</span><span>A ad alias animi assumenda cumque deleniti dolore doloribus ducimus eligendi eos et eveniet impedit in ipsam nam nemo officia officiis porro possimus rem reprehenderit sapiente sequi, similique tempora vero.</span><span>Autem distinctio hic quam recusandae sequi? Animi debitis error facere incidunt nulla quis tenetur, vel veniam. Accusantium est fugit inventore iusto nobis quasi quo quos saepe suscipit, veritatis vero, voluptas.</span><span>Atque commodi delectus dolorum eius eum fugiat id illum incidunt iste minus natus non, numquam quaerat quasi quidem quisquam quos repellat reprehenderit repudiandae sunt tempora tempore ullam ut veniam veritatis!</span><span>Distinctio doloribus ducimus eos ex omnis perferendis quia voluptates! Atque autem consequuntur debitis deleniti doloremque eveniet, explicabo illo minus officiis omnis quaerat quam quia quidem repellat repellendus rerum ut voluptas.</span><span>Culpa dolore illum perspiciatis vero voluptas. Ab assumenda atque culpa dicta dolor earum eius excepturi expedita ipsam maxime minus, molestiae molestias nesciunt obcaecati odio officiis omnis, perspiciatis soluta tenetur vel.</span><span>Ab aliquid eos et excepturi facilis illum iure libero mollitia quae quas, similique voluptatum. Corporis culpa cumque ducimus eligendi eos est explicabo, modi necessitatibus nemo rem repellat repellendus sequi temporibus.</span><span>Aliquam aperiam aut delectus dicta dignissimos distinctio dolores eius, eos id incidunt iste modi non possimus praesentium quasi sapiente, soluta suscipit ut, voluptates voluptatum! Aliquam doloribus obcaecati possimus qui sapiente!</span><span>A architecto beatae doloribus est expedita ipsa ipsam laudantium libero nam odit officia officiis perferendis perspiciatis quidem reiciendis, rerum similique sint totam ut velit. Autem dolorem doloremque natus placeat sunt!</span><span>Ab aut autem blanditiis debitis delectus, distinctio dolore, dolorem doloremque dolorum excepturi hic id illo impedit laudantium modi nisi numquam officiis quae quibusdam quis, quod reprehenderit sunt tempora temporibus vitae?</span><span>Aliquam dolores ea libero molestias necessitatibus numquam quaerat repellat suscipit! Asperiores blanditiis dicta iste laboriosam maiores modi numquam optio quam quisquam, reprehenderit saepe vitae voluptatem! Illum iste itaque pariatur veniam.</span><span>Alias assumenda at beatae distinctio est fugiat neque optio, quaerat quibusdam quod tempora ullam voluptates, voluptatum. Amet aut commodi corporis deserunt ducimus eligendi eos excepturi, illum impedit iure, veritatis voluptatum.</span><span>A at, cum harum inventore ipsum nulla, omnis pariatur rem sequi suscipit unde veritatis. Consequatur deleniti dolore, enim facere, in iste, laboriosam minus numquam praesentium quam ratione similique voluptas voluptatibus?</span><span>At cumque est ipsum iste rem sint unde! At blanditiis commodi culpa dignissimos, illum modi non nostrum placeat tempora ut. Ad asperiores at dicta praesentium quidem quis tempora velit voluptatum?</span><span>Dicta illo in ipsa sed soluta! Cumque, harum, perspiciatis. Assumenda autem, ea esse excepturi fugiat iusto natus nesciunt, obcaecati odio possimus repellat rerum sapiente sed totam unde? Mollitia, reiciendis, sequi!</span><span>Adipisci atque autem error fuga harum officiis quibusdam quisquam quo temporibus vitae. Atque aut ducimus eligendi ipsam magni minus necessitatibus nisi officiis perspiciatis, recusandae rem, temporibus vel? Eaque laboriosam, qui.</span><span>Ea est eveniet libero quibusdam voluptatibus! Accusantium adipisci at dicta distinctio dolorem, et facere fugiat harum ipsa ipsum iste laborum modi mollitia neque, obcaecati perferendis provident repellat tempora voluptate, voluptates!</span><span>Assumenda consectetur distinctio incidunt iure voluptates. Cupiditate distinctio impedit labore modi nobis optio perspiciatis qui quidem! Ad amet autem cumque distinctio dolorem doloribus ex fugiat, hic neque porro tempore totam.</span>
        p.app__sidebar__btn__wrapper
          b-btn(variant="primary" block) Hola!
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PrivateLayoutComponent extends Vue {}
</script>
<style lang="sass" scoped>
.app__sidebar__btn__wrapper
  position: sticky
  bottom: 0
  padding: .5rem
  margin: 0 -1rem
  background: #fff
</style>

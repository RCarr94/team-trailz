
export default function TempComp() {
  return(
  <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">

    <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden ">
      <img class="w-full" alt="image of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
      <img class="mt-6 w-full" alt="image of a girl posing" src="https://i.ibb.co/qxkRXSq/component-image-two.png" />
    </div>

    <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
      < div class="border-b border-gray-200 pb-6">
        <h1 class="text-4xl leading-none text-gray-600  ">Trail TITLE</h1>
      </div>
    
      <div class="py-4 border-b border-gray-200 flex items-center justify-between">
        <p class="text-base leading-4 text-gray-800 dark:text-gray-300">Location</p>
        <div class="flex items-center justify-center">
          <p class="text-sm leading-none text-gray-600 dark:text-gray-300">ADDRESS HERE</p>
        </div>
      </div>
    
      <div class="py-4 border-b border-gray-200 flex items-center justify-between">
        <p class="text-base leading-4 text-gray-800 dark:text-gray-300">Trail Length</p>
        <div class="flex items-center justify-center">
          <p class="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">38.2 km</p>
        </div>
      </div>

      <div class="py-4 border-b border-gray-200 flex items-center justify-between">
        <p class="text-base leading-4 text-gray-800 dark:text-gray-300">Difficulty</p>
        <div class="flex items-center justify-center">
          <p class="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">Average</p>
        </div>
      </div>
    
      <div>
        <p class="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">This is where Descriptions will go</p>
      </div>

    </div>
</div>
  )
}
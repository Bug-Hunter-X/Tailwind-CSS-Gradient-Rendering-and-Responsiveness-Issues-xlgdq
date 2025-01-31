```javascript
/*gradientSolution.js*/
@media (min-width: 768px) {
  .bg-gradient-md {
    background-image: linear-gradient(to right, blue, purple);
  }
}

@media (max-width: 767px) {
  .bg-gradient-md {
    background-image: linear-gradient(to bottom, blue, purple);
  }
}

<div class="bg-gradient-md p-4 rounded-lg shadow-lg">
  <!-- Content here -->
</div>
```
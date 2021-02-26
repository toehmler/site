<template>
  <div id="unet">
    <div class="container py-md-5 pb-5">
      <div class="row align-items-center">
        <div class="col-xl-7 col-lg-7 col-md-10 col-sm-11">
          <h1 id="title"><span class="fw-600">NuNet</span><br>Using Convolutional Neural Networks to Automatically Segment Brain Tumors</h1>
          <p class="lead my-4">I've trained a model that can accurately and quickly segment the various subregions of high-grade gliomas. This project was started as an independent research inquiry while I was an undergrad and I've continued working on the project out of curiosity. I'd like to try and explain how I did it, what makes the architecture I choose so special, and why I believe UNets will become the standard architecture for segmentation tasks long into the future.</p>
          <p class="small"><b>Note:</b> this project and explanation assume some background knowledge of programming, linear algebra, neural networks, kernel convolutions and the digital representation of images.
            <span class="small fw-light">ie. everything</span>
          </p>
        </div>
        <div class="d-none d-lg-block col-lg-4 col-xl-4 offset-lg-1">
          <img src="/simple_mris_vert.jpg" class="img-fluid d-xl-none">
          <img src="/simple_mris_square.jpg" class="img-fluid d-none d-xl-block">

          <!--

          <img src="/mri_grid.jpg" class="d-md-none d-xl-block img-fluid">
          <img src="/tumor_vert_slice.jpg" class="d-none d-lg-block d-xl-none img-fluid">
          -->
        </div>
      </div>
    </div>
    <div class="container-fluid bg-dark-blue pb-5">
      <div class="container">
        <div class="row py-5">
          <div class="col-xl-10 col-lg-11 py-lg-5">
            <p class="text-light fw-300">Glioma tumors are currently the most common type of brain tumor. In their high-grade form they can significantly reduce life expectancy. To inform the treatment of these tumors, it is important to accurately distinguish healthy tissue from various regions of a tumor. The process of doing so is called <span class="fw-600">segmentation</span> and is normally performed by a radiologist. The task can be extremely time consuming, taking up to several hours per patient. Since 2013,  the Perelman School of Medicine at the University of Pennsylvania has been hosting the <a href="https://www.med.upenn.edu/cbica/brats2020/data.html"><u>Multimodal Brain Tumor Segmentation Challenge</u></a> (BraTS), aimed at developing algorithms to automatically segment gliomas. The competition has demonstrated the rapid pace of development in the field of computer vision, specifically as it relates to medical imaging.</p> 
            <p class="text-light mt-4 fw-300">Despite lack of widespread clinical adoption,  there’s been a spike in research and interest in the application of deep learning methods to medical data processing in general. The high performance of models on tasks like segmentation and classification has shown the potential for their use in such settings. I was curious to see how these models worked, so I decided to create my own. Using data from the 2015 MICCAI BRaTS challenge, I implemented a Convolution Neural Network to segment high-grade gliomas that can generate predictions quickly and with reasonable accuracy. You can view the code for this project (and try it out for yourself) on my <a href="https://github.com/toehmler"><u>GitHub.</u></a></p>
          </div>
        </div>
      </div>
      <div class="d-lg-none container">
        <div class="row">
          <div class="col-md-9 col-sm-10 col-12 mb-4">
            <img src="/brain_grid.jpg" class="img-fluid">
          </div>
          <div class="col-md-9 col-sm-10 col-12">
            <h2 class="mr-auto text-light">The Data</h2>
            <p class="fw-300 text-light">To better understand the problem we’re trying to solve I think it helps to visualize the data and break down the segmentation process in to its most basic parts. This project uses data from the <a href="https://www.med.upenn.edu/cbica/brats2020/data.html"><u>MICCAI 2015 BRaTS Challenge</u></a>. While the dataset includes examples of both high-grade and low-grade gliomas, for now, we’ll only be focusing on high-grade gliomas due to scans of this form being more widely available. The dataset has the labeled MRI scans of 220 high-grade glioma patients. The scans for each patient are comprised of 155 slices across 4 seperate modalities, <span class="fw-600">FLAIR</span> <span class="fw-600">T1</span>, <span class="fw-600">T1c</span>, and <span class="fw-600">T2</span>.</p>
             <p class="fw-300 text-light">All these MRI’s are pretty to look at, but they don’t mean much if you’re not a radiologist or if you don’t know what you’re looking for. The labels included with the scans for each patient summarize the annotations of several experts and distinguish the various regions of the tumors. In the example below, we can see what the label for an individual slice looks like.</p>
            <img src="/label_diagram.jpg" class="img-fluid my-4">
            <p class="fw-300 text-light">In computer vision, this type of problem is called <span class="fw-600">semantic segmentation</span>. It’s important to note how this task differs slightly from <span class="fw-600">object detection</span> and <span class="fw-600">instance segmentation</span>. While we not only need to classify each pixel in the input image, we also essentially need to localize each of various tumor subregions simultaneously. Tumors are relatively solid objects (at least in comparison to a gas), and while I guess it’s not impossible for a tumor to be in two places in the brain at once, I’ve never come across any examples of this in any of the public datasets I’ve looked at (although I am certainly no neurologist). The localized nature of tumors should be intuitive: like regions are closer to like regions. We can summarize this with the observation that <i>the classification of a pixel is influenced by the classifications of the surrounding pixels</i>. This observation is key to understanding the use of convolution neural networks for this type of problem.</p>

          </div>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <Scrollama
          :debug="false"
          :offset="0.2">
          <div class="graphic" slot="graphic">
            <img src="brain_grid.jpg" class="img-fluid">
          </div>
          <div class="step" data-step-no="1">
            <h2 class="mr-auto text-light">The Data</h2>
            <p class="fw-300 text-light">To better understand the problem we’re trying to solve I think it helps to visualize the data and break down the segmentation process in to its most basic parts. This project uses data from the <a href="https://www.med.upenn.edu/cbica/brats2020/data.html"><u>MICCAI 2015 BRaTS Challenge</u></a>. While the dataset includes examples of both high-grade and low-grade gliomas, for now, we’ll only be focusing on high-grade gliomas due to scans of this form being more widely available. The dataset has the labeled MRI scans of 220 high-grade glioma patients. The scans for each patient are comprised of 155 slices across 4 seperate modalities, <span class="fw-600">FLAIR</span> <span class="fw-600">T1</span>, <span class="fw-600">T1c</span>, and <span class="fw-600">T2</span>.</p>
            <p class="fw-300 text-light">All these MRI’s are pretty to look at, but they don’t mean much if you’re not a radiologist or if you don’t know what you’re looking for. The labels included with the scans for each patient summarize the annotations of several experts and distinguish the various regions of the tumors. In the example below, we can see what the label for an individual slice looks like.</p>
            <img src="/label_diagram.jpg" class="img-fluid my-4">
            <p class="fw-300 text-light">In computer vision, this type of problem is called <span class="fw-600">semantic segmentation</span>. It’s important to note how this task differs slightly from <span class="fw-600">object detection</span> and <span class="fw-600">instance segmentation</span>. While we not only need to classify each pixel in the input image, we also essentially need to localize each of various tumor subregions simultaneously. Tumors are relatively solid objects (at least in comparison to a gas), and while I guess it’s not impossible for a tumor to be in two places in the brain at once, I’ve never come across any examples of this in any of the public datasets I’ve looked at (although I am certainly no neurologist). The localized nature of tumors should be intuitive: like regions are closer to like regions. We can summarize this with the observation that <i>the classification of a pixel is influenced by the classifications of the surrounding pixels</i>. This observation is key to understanding the use of convolution neural networks for this type of problem.</p>
          </div>
        </Scrollama>
      </div>
    </div>
    <div class="container-fluid bg-white">
      <div class="container">
        <div class="row pt-5">
          <div class="col-xl-9">
            <h2>Convolutional Neural Networks</h2>
            <p>The convolution neural network  arguably has become the most important tool in the field of computer vision over the last decade as as the availability of data, computing power and popularity of deep learning have exploded. If you’re unfamiliar with neural networks in general, I highly recommend this <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi"><u>tutorial series</u></a> by <a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw"><u>3Blue1Brown</u></a>. To understand what makes CNNs so powerful it's helpful to consider the following traditional neural network, sometimes called a multi-layer perceptron.</p> 
          </div>
        </div>
        <div class="row">
          <div class="col-xl-9">
            <p>This example can hypothetically be used to classify 28x28 pixel images as being a digit from 0-9. While this sort of network might be useful for recognizing handwritten digits, it’s not helpful for the kind of classification we’re trying to accomplish. We can’t summarize the sub-regions of a tumor to a single data point, like this network is summarizing its input as being one of ten digits. This summarization makes sense in the context of object recognition, but in the context of the localization required by segmentation, summarization is useless.</p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-xl-7">
            <p>The goal of the digit classification network above is to take its 784 inputs (28x28 pixels in an image) and give a single output, representing the digit drawn in the input image. The goal of the segmentation problem is to classify each individual <i>pixel</i>, meaning that an input of 784 should have an output size of 784. Additionally, while the traditional, feed-forward network given above might be able to achieve relative accuracy on a digit classification task, it could be highly susceptible to subtle shifts in the placement of the digit within the input image. This is due to the lack of <i>context</i> the network has when making a classification. What do I mean by context? From the perspective of the network, each individual pixel is treated separately from each other pixel. This poses a significant problem when trying to detect edges or higher-level features within an image.</p>
          </div>
          <div class="col-xl-5 mb-4 mb-lg-0">
            <img src="/neural_network_trailer.png" class="img-fluid">
          </div>
        </div>
        <div class="row">
          <div class="col-xl-9">
            <p>This problem led researchers to create Convolution Neural Networks. The main advantage offered by CNNs over traditional neural nets is their ability to take additional context into account when making a classification. This is primarily due to the use the of “convolution” operator, which allows for the extraction of higher-level features from an input image by preserving the spatial relationships between pixels.</p>
          </div>
        </div>
        <div class="row my-4">
          <div class="col">
            <h4>The Convolution Operation</h4>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-xl-7 mb-4 mb-lg-0">
            <img src="/conv_animation.gif" class="img-fluid">
          </div>
          <div class="col-xl-5">
            <p>If you’re not familiar with convolutions from a mathematics perspective, I found this <a href="https://colah.github.io/posts/2014-07-Understanding-Convolutions">overview</a> extremely helpful, but for the sake of this explanation, it’s not necessary to understand more than what this operation looks like in practice. I could try to explain in writing what the operation is doing but I think the following animation gives a much better picture than I could ever try to explain.</p>

            <p>In this example, an image of size 7x7 with three channels (ie RGB)  is used as input, while two sets of filters are <i>convolved</i> over the input image to create the two output volumes. The <i>context</i> advantage I mentioned before comes from these filters. Because our filters are 3x3, we can see that each output value is determined by 9 input values. The size of these filters is usually referred to as the <i>receptive field</i> and by increasing their size, we decrease the size of our output.</p>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h4>Downsampling</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-9 col-lg-11">
            <p>The process of reducing the size of our input is called <span class="fw-600">downsampling</span>. In the above example, our 7x7 input is transformed into a 3x3 output. The resulting output from a kernel convolution (kernels are the matrices we are convolving) is sometimes referred to as a <span class="fw-600">feature map</span>. This name comes from the fact that we can think of a kernel as a filter for different features. Features can be anything from an edge or gradient to even something as high level as a face. We can conceptualize the act of convolving a filter over an input as creating a map of where a particular features exists within an input.</p>
          </div>
        </div>
        <div class="row my-4">
          <div class="col">
            <img src="/max_pool_diagram.png" class="img-fluid">
          </div>
        </div>
        <div class="row">
          <div class="col-xl-9">
            <p>Another operation central to CNNs is the <span class="fw-600">max pooling</span> operation. All max pooling does is help with downsampling. We need to downsample using kernel convolutions and max pooling in order to reduce the size of our feature maps so our network has fewer parameters. While downsampling has the effect of lowering image resolution, this is necessary or otherwise our network would be too massive to even fit into RAM. Due to layers in a CNN’s using <i>sets</i> of feature maps, each convolutional layer can have hundreds of thousands of trainable parameters. By downsampling we can retain only the important features in a region while getting rid of redundant or useless neurons. While downsampling, most CNN architectures tend to increase the number of filter maps at each layer to account for this loss in spatial resolution. By increasing the number of filters when the image is downsampled, we can not only increase the proportional receptive field at each layer but also extract more complex features as we move though the network. Take the following visualization of a CNN’s filters from different layers.</p>
          </div>
        </div>
        <div class="row align-items-center my-4">
          <div class="col-lg-4 mb-4 mb-lg-0">
            <img src="/filter_visuals.png" class="img-fluid">
          </div>
          <div class="col-lg-8 col-xl-7">
            <p>We can see clearly that the first layer filters extract very general features, which are almost entirely edges. In the second layer we can start to recognize facial features and in the third layer we can start to work out entire faces. We can intuitively make the following conclusion about downsampling: while doing so allows a network to better understand <i>what</i> is in an image, we lose the spatial resolution to determine <i>where</i> things exist in an image.</p>
            <p>After our input has gone through the first several convolutional layers in a CNN, we are left with a set of downsampled feature maps. The most common practice is to slap a standard neural net to the end of the model to actually do our classification. This type of layer is referred to as a fully-connected layer, and is what allows a model to actually make a prediction about what’s in an image. Take the following example network used to classify an input image as being one of either four classes: dog, cat, boat or bird.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-10 py-5">
            <img src="/cnn_diagram.png" class="img-fluid">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-xl-9">
            <p>When looking at this architecture we can see that it won’t help us with our segmentation task. As I previously mentioned, we need to classify each individual pixel as one of our five labels. However, if we think about this network differently we can adapt it to our segmentation task while retaining the contextual advantage it offers. Instead of thinking of the network’s output as a classification for the entire input, we can think of its output as a classification for just the <i>center pixel</i> of the output. This conceptualization makes it possible to segment the entire image by creating <i>patches</i> from our input that we can then each individually feed through the CNN to classify every pixel.</p>
            <p>When first starting this project in the spring of 2019, this was the strategy I used (although with limited success) and its validity can be shown by the success of several teams in the BRaTS challenge that have employed it over the last few years. Notably however, an architecture similar to this hasn’t finished within the top three for the  segmentation challenge since 2017. This is almost entirely due to the introduction of the <span class="fw-600">UNet</span> architecture. To understand the success of the UNet, it’s important to understand the limitations and drawbacks of the “patches” approach.</p>
            <p>In order to segment an image using patches, we need to determine the size of these patches based on the limits of our input size. If we use a large patch size, we can’t segment large portions of the border without padding our input. This creates a trade-off where we want to use as much context (spatial information) as possible when classifying a pixel while also keeping our patch size small. While our CNN will still have some context when classifying, ideally it would have <i>all</i> of the spatial context offered by our input, instead of just a tiny subset of this context.  Additionally, when segmenting a single patient, we need to feed each patch through the network individually. This means <i>a lot</i> of extremely similar (if not identical) inputs being redundantly classified. While medical segmentation isn’t necessarily bound by time constraints, it sort of defeats the purpose of using an algorithm if the benefit is marginal.</p>
            <p>I mentioned before that when using traditional CNN architecture, we retain the <span class="fw-600">what</span> information in an image but we lose the <span class="fw-600">where</span> information. For the purpose of segmentation we need both the <span class="fw-600">what</span> and <span class="fw-600">where</span> information. This is where the concept of <span class="fw-600">upsampling</span> comes in handy.</p>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <h4>Upsampling</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-9">
            <p>Upsampling is exactly what it sounds like: turning a lower resolution image into a higher resolution image using some form of interpolation. There are a variety of different operations that can be used to do this in different contexts. Some of these include: bi-linear interpolation, cubic interpolation and nearest neighbor interpolation, although the operation I would like to focus on is a transposed convolution.</p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-8">
            <p>Before we get into transposed convolutions, we should conceptualize how upsampling can help us in the first place.  Consider a traditional CNN as a function <i>f</i>, with a set of inputs <i>x</i> (the pixels in our input image). By definition, a function <i>f</i> maps every element in some set to a unique element in some other set. In the case of our patches approach, <i>f</i> maps each patch to some probability vector, which describes the likelihood of each label for the center pixel of that patch. What if, instead of mapping each patch to a vector, we mapped each pixel to a vector? This is a much more intuitive approach to segmentation and would allow us to feed an entire 2D slice into our network as input, instead of having to split it up into patches first. This approach is also the general principle behind an autoencoder network.</p>
          </div>
          <div class="col-lg-4 col-xl-3 offset-xl-1 mb-4 mb-lg-0">
            <img src="/encoder_decoder_diagram.png" class="img-fluid">
          </div>
        </div>
        <div class="row">
          <div class="col-xl-9">
            <p>The idea behind this architecture is that a network can “learn” to represent an input in a much simpler way and then use this representation to “reconstruct” the image in such a way that the “noise” or unnecessary “signals” are ignored. In theory, this means that our bottleneck learns a representation of only the most “important” or most “relevant” features in our input.  While our output size will equal our input size,  it’s important to note that the input is <span class="fw-600">compressed linearly</span> to form our latent space representation.  The resulting bottleneck means that <i>by design</i> it’s impossible to transmit all of the features in the encoder part of the network to the decoder part. Given the nature of our segmentation task it’s crucial that we capture as many of the features present in our input as possible, as we need to retain as much spatial context as possible when classifying each pixel individually. This is not possible using any technique that linearly downsamples our input. To overcome the bottleneck problem we need to introduce <span class="fw-600">deconvolutions</span> which are sometimes referred to as fractionally-strided convolutions or <span class="fw-600">transposed convolutions</span>.</p>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <h4>Transposed Convolutions</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-9">
            <p>When using an interpolation technique to upsample, there aren’t any trainable parameters in the decoder portion that allow the network to “learn” the optimal method to upsample. By using transposed convolutions instead of a predefined interpolation method, we introduce trainable parameters to the decoder. Through training these parameters with backpropagation we are able to upsample with much greater accuracy. If you’d like an in-depth explanation on transposed convolutions, this <a href="https://naokishibuya.medium.com/up-sampling-with-transposed-convolution-9ae4f2df52d0"><u>blog post</u></a> does an amazing job, although for our purposes, we only need a high level understanding of the operation. Consider the standard convolution operation:</p>
          </div>
        </div>
        <div class="row align-items-center mt-4">
          <div class="col-xl-8 col-lg-9">
            <img src="/c_diagram.jpg" class="img-fluid">
          </div>
          <div class="col-lg-3 my-4 my-lg-0">
            <p>To perform this operation we first pad our input, and then slide the kernel over this input by predefined sized jumps (stride). We can perform a transposed convolution using a modified procedure.</p>
          </div>

        </div>
        <div class="row mt-lg-5">
          <div class="col-xl-11">
            <img src="/tc_diagram.jpg" class="img-fluid">
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-xl-9 mt-lg-4">
            <p>The process is fairly similar to that of a regular convolution except that before padding we insert zeroes in a checkerboard pattern. Another key difference is that for a transposed convolution, the kernel is always convolved over the input with a stride length of 1. Hopefully it is clear from these visualizations why we can think of a transposed convolution as a “reverse convolution”.</p>
          </div>
        </div>
      </div>
      <div class="container d-lg-none">
        <div class="col-sm-10 col-12">
          <h2 class="mr-auto">The UNet Architecture</h2>
          <p>Now that we’ve touched on autoencoders and transposed convolutions we can look at the UNet architecture and understand the advantages it provides. Introduced in May 2015 by Olaf Ronneberger and a team of researchers from the University of Freiburg in Germany, the architecture immediately stood out compared to other architectures due to how well it performed in a number of different biomedical segmentation challenges. The network is made up of a <i>contracting</i> (encoder) path and <i>expansive</i> (decoder) path.</p> 
          <img src="/unet.jpg" class="img-fluid">
          <p>The <span class="fw-600">fully convolutional</span> nature of the network allows for variably-sized inputs, while the use of transposed convolutions in the decoder path enables precise localization of features. For a network to be fully convolutional simply means there are no <i>dense</i> or <i>fully connected</i> layers. These are the layers that allow for classification within a standard CNN. In a FCN, 1x1 convolutions fulfill the role of a dense layer by changing the dimensionality of our filter space. In this example a 1x1 convolution is used to map the feature vectors in the second-to-last layer to the desired number of classes.</p>
            <p>There are two major features to this architecture that I want to highlight. The first of these is the way in which the filter map count is doubled at every point we downsample, or cut in half at every point we upsample. The result of this design choice is that the network is better able to propagate contextual information to higher resolution layers. The second key feature is the incorporation of <span class="fw-600">skip connections</span>. In the network diagram, these are represented by the grey arrows that point from the contracting to the expansive path. This architecture uses skip connections by concatenation, and are crucial in restoring the spatial resolution lost from the input due to downsampling. Doing this enables much more precise localization as the concatenation is followed immediately by a convolutional layer that can be trained to more accurately reassemble our input within the expansion path.</p>
        </div>
      </div>



      <div class="d-none d-lg-block">
        <Scrollama
          :debug="false"
          :offset="0.2">
          <div class="graphic" slot="graphic">
            <img src="/unet.jpg" class="img-fluid">
          </div>
          <div class="step" data-step-no="1">
            <h2 class="mr-auto">The UNet Architecture</h2>
            <p>Now that we’ve touched on autoencoders and transposed convolutions we can look at the UNet architecture and understand the advantages it provides. Introduced in May 2015 by Olaf Ronneberger and a team of researchers from the University of Freiburg in Germany, the architecture immediately stood out compared to other architectures due to how well it performed in a number of different biomedical segmentation challenges. The network is made up of a <i>contracting</i> (encoder) path and <i>expansive</i> (decoder) path.</p> 
            <p>The <span class="fw-600">fully convolutional</span> nature of the network allows for variably-sized inputs, while the use of transposed convolutions in the decoder path enables precise localization of features. For a network to be fully convolutional simply means there are no <i>dense</i> or <i>fully connected</i> layers. These are the layers that allow for classification within a standard CNN. In a FCN, 1x1 convolutions fulfill the role of a dense layer by changing the dimensionality of our filter space. In this example a 1x1 convolution is used to map the feature vectors in the second-to-last layer to the desired number of classes.</p>
            <p>There are two major features to this architecture that I want to highlight. The first of these is the way in which the filter map count is doubled at every point we downsample, or cut in half at every point we upsample. The result of this design choice is that the network is better able to propagate contextual information to higher resolution layers. The second key feature is the incorporation of <span class="fw-600">skip connections</span>. In the network diagram, these are represented by the grey arrows that point from the contracting to the expansive path. This architecture uses skip connections by concatenation, and are crucial in restoring the spatial resolution lost from the input due to downsampling. Doing this enables much more precise localization as the concatenation is followed immediately by a convolutional layer that can be trained to more accurately reassemble our input within the expansion path.</p>
          </div>
        </Scrollama>
      </div>
      <div class="container">
        <div class="row pb-5">
          <div class="col-xl-9 pb-4">
            <p>There are two major features to this architecture that I want to highlight. The first of these is the way in which the filter map count is doubled at every point we downsample, or cut in half at every point we upsample. The result of this design choice is that the network is better able to propagate contextual information to higher resolution layers. The second key feature is the incorporation of <span class="fw-600">skip connections</span>. In the network diagram, these are represented by the grey arrows that point from the contracting to the expansive path. This architecture uses skip connections by concatenation, and are crucial in restoring the spatial resolution lost from the input due to downsampling. Doing this enables much more precise localization as the concatenation is followed immediately by a convolutional layer that can be trained to more accurately reassemble our input within the expansion path.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Scrollama from "vue-scrollama";

export default {
  components: {
    Scrollama
  },
}
</script>


  

 

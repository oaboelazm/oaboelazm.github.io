export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-intelligent-iot-systems-with-edge-ai",
    title: "Building Intelligent IoT Systems with Edge AI",
    excerpt: "Exploring how to deploy machine learning models on resource-constrained embedded devices for real-time inference.",
    date: "Mar 2026",
    tag: "AI / Embedded",
    content: `
The intersection of artificial intelligence and embedded systems is one of the most exciting frontiers in technology today. As IoT devices become more ubiquitous, the need to process data locally — at the edge — has never been greater.

## Why Edge AI?

Traditional cloud-based AI architectures introduce latency, require constant connectivity, and raise privacy concerns. Edge AI solves these problems by running inference directly on the device.

- **Low latency**: Real-time decisions without round-trips to the cloud
- **Privacy**: Sensitive data never leaves the device
- **Reliability**: Works offline or in low-connectivity environments
- **Cost**: Reduces cloud compute and bandwidth costs

## Choosing the Right Hardware

Not all embedded platforms are created equal. Here's a quick comparison of popular options:

**Raspberry Pi 4** — Great for prototyping with its quad-core ARM Cortex-A72. Supports TensorFlow Lite and OpenCV out of the box.

**NVIDIA Jetson Nano** — Purpose-built for AI workloads with a 128-core Maxwell GPU. Ideal for computer vision tasks.

**ESP32 with TensorFlow Lite Micro** — For ultra-low-power applications where you need ML inference on a microcontroller.

## Model Optimization

Running a full-size neural network on an embedded device is usually impractical. Key optimization techniques include:

1. **Quantization** — Converting 32-bit floating point weights to 8-bit integers, reducing model size by 4x with minimal accuracy loss.
2. **Pruning** — Removing unnecessary connections in the neural network.
3. **Knowledge Distillation** — Training a smaller "student" model to mimic a larger "teacher" model.

## A Practical Example

Here's a high-level workflow for deploying a object detection model on a Jetson Nano:

1. Train your model using PyTorch or TensorFlow on a cloud GPU
2. Export to ONNX format
3. Optimize with TensorRT for the target hardware
4. Deploy using a lightweight inference server
5. Connect to sensors and actuators via GPIO

## Looking Ahead

The future of Edge AI is incredibly promising. With frameworks like TensorFlow Lite, ONNX Runtime, and Apache TVM maturing rapidly, we're approaching a world where every device can be intelligent.

The key challenge remains balancing model accuracy with computational constraints — but that's what makes this field so fascinating.
    `,
  },
  {
    slug: "from-prototype-to-production",
    title: "From Prototype to Production: Lessons Learned",
    excerpt: "Key takeaways from shipping hardware-software products — from PCB design to cloud deployment.",
    date: "Feb 2026",
    tag: "Engineering",
    content: `
Shipping a product that spans hardware and software is one of the most challenging — and rewarding — endeavors in engineering. After several years of building and shipping embedded products, here are my key takeaways.

## Start with the End in Mind

Before writing a single line of code or routing a PCB, define your success criteria. What does the final product look like? What are the non-negotiables?

This sounds obvious, but scope creep is the number one killer of hardware projects. Unlike software, you can't easily push an update to fix a hardware design flaw.

## Design for Manufacturing (DFM)

Your prototype works on the bench — great. But will it survive mass production? Key DFM considerations:

- **Component availability**: Don't design around parts with 52-week lead times
- **Assembly complexity**: Minimize the number of unique components
- **Test points**: Make every critical signal accessible for automated testing
- **Thermal management**: What works at room temperature may fail at 60°C

## The Software Side

Embedded firmware has its own set of challenges:

1. **OTA Updates** — Plan for over-the-air firmware updates from day one. You will need them.
2. **Error Handling** — Embedded systems can't crash gracefully. Implement watchdog timers and robust error recovery.
3. **Power Management** — Battery-powered devices need aggressive power optimization. Every milliamp counts.

## Testing is Non-Negotiable

In hardware, bugs are expensive. A software bug might cost you a sprint to fix; a hardware bug can cost you an entire production run.

- Write hardware-in-the-loop tests
- Use automated test fixtures for production
- Implement continuous integration for firmware
- Test at temperature extremes, voltage boundaries, and under EMI

## The Human Element

The most underrated aspect of shipping products is communication. Hardware projects involve mechanical engineers, electrical engineers, firmware developers, cloud engineers, and product managers. Clear documentation and regular sync-ups prevent costly misalignments.

## Final Thoughts

Building physical products is hard, but the satisfaction of holding something you designed and seeing it work in the real world is unmatched. Embrace the complexity, plan meticulously, and always have a plan B.
    `,
  },
  {
    slug: "computer-vision-on-a-budget",
    title: "Computer Vision on a Budget: OpenCV + Raspberry Pi",
    excerpt: "A practical guide to building real-time object detection pipelines using affordable hardware.",
    date: "Jan 2026",
    tag: "Computer Vision",
    content: `
You don't need a $10,000 GPU setup to experiment with computer vision. With a Raspberry Pi and OpenCV, you can build surprisingly capable vision systems for under $100.

## What You'll Need

- Raspberry Pi 4 (4GB recommended)
- Pi Camera Module v2 or a USB webcam
- MicroSD card (32GB+)
- Power supply and case

Total cost: ~$75

## Setting Up

Start with a fresh Raspberry Pi OS installation, then install OpenCV:

The installation can take a while on the Pi, so grab a coffee. Alternatively, use a pre-built wheel to save time.

## Your First Pipeline

A basic real-time video processing pipeline with OpenCV looks like this:

1. Capture frames from the camera
2. Apply preprocessing (resize, blur, color conversion)
3. Run detection or classification
4. Draw results on the frame
5. Display or stream the output

## Object Detection Approaches

**Haar Cascades** — Fast and lightweight, great for face detection. Limited accuracy for complex objects.

**MobileNet SSD** — A good balance of speed and accuracy. Runs at ~5 FPS on Pi 4 with TensorFlow Lite.

**YOLOv5 Nano** — Surprisingly capable on Pi 4 with proper optimization. Expect 2-3 FPS.

## Optimization Tips

Getting acceptable performance on a Pi requires some tricks:

- **Reduce resolution**: 320x240 is often sufficient for detection
- **Skip frames**: Process every other frame and interpolate
- **Use threading**: Separate capture and processing threads
- **Hardware acceleration**: Use the Pi's VideoCore GPU where possible
- **Quantized models**: Use INT8 quantized models via TensorFlow Lite

## Real-World Applications

Some projects I've built with this setup:

1. **Smart doorbell** — Face detection and recognition for family members
2. **Pet feeder** — Detects when the cat is near the bowl and dispenses food
3. **Garden monitor** — Identifies plant health issues using color analysis
4. **Security camera** — Motion detection with notification alerts

## Streaming Your Results

Want to view your camera feed remotely? Use Flask to create a simple MJPEG stream that you can access from any browser on your network.

## Conclusion

The Raspberry Pi is an incredible platform for learning and prototyping computer vision applications. While it won't match the performance of dedicated AI hardware, it's more than capable for many real-world use cases. Start small, optimize aggressively, and you'll be surprised what's possible on a $35 computer.
    `,
  },
];

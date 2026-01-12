<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.6`
* __Run:__ Mon Jan 12 2026 01:43:41 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.6 | ✗      | 48103.2    | 20.30        | 8.58          |
| fastify                  | 4.29.1   | ✓      | 47725.6    | 20.46        | 8.56          |
| polka                    | 0.5.2    | ✓      | 47632.8    | 20.50        | 8.49          |
| kita                     | 1.1.36   | ✓      | 47455.2    | 20.57        | 8.51          |
| polkadot                 | 1.0.0    | ✗      | 47172.0    | 20.69        | 8.41          |
| connect                  | 3.7.0    | ✗      | 46713.4    | 20.90        | 8.33          |
| rayo                     | 1.4.6    | ✓      | 46704.0    | 20.88        | 8.33          |
| server-base-router       | 7.1.32   | ✓      | 46330.4    | 21.07        | 8.26          |
| server-base              | 7.1.32   | ✗      | 45806.4    | 21.35        | 8.17          |
| h3                       | 1.15.4   | ✗      | 44272.8    | 22.09        | 7.90          |
| 0http                    | 3.5.3    | ✓      | 44022.4    | 22.22        | 7.85          |
| connect-router           | 1.3.8    | ✓      | 43165.6    | 22.66        | 7.70          |
| h3-router                | 1.15.4   | ✓      | 43049.6    | 22.73        | 7.68          |
| restana                  | 4.9.9    | ✓      | 40090.4    | 24.44        | 7.15          |
| hono                     | 4.11.3   | ✓      | 38424.2    | 25.49        | 6.30          |
| koa                      | 2.16.3   | ✗      | 37492.8    | 26.15        | 6.69          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35757.8    | 27.46        | 6.38          |
| restify                  | 11.1.0   | ✓      | 35389.0    | 27.74        | 6.38          |
| take-five                | 2.0.0    | ✓      | 35144.2    | 27.95        | 12.64         |
| koa-router               | 12.0.1   | ✓      | 34140.0    | 28.78        | 6.09          |
| hapi                     | 21.4.4   | ✓      | 32024.6    | 30.72        | 5.71          |
| fastify-big-json         | 4.29.1   | ✓      | 11827.8    | 83.99        | 136.09        |
| express                  | 4.22.1   | ✓      | 11007.0    | 90.30        | 1.96          |
| express-with-middlewares | 4.22.1   | ✓      | 10121.0    | 98.21        | 3.76          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
